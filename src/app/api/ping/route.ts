import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

const locationHosts = {
  'nuremberg': 'ip1',
  'losangeles': 'ip2',
  'helsinki': 'ip3',
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');

  if (!location || !locationHosts[location as keyof typeof locationHosts]) {
    return NextResponse.json({ error: 'Invalid location' }, { status: 400 });
  }

  const host = locationHosts[location as keyof typeof locationHosts];

  try {
    const pingCount = 3;
    const command = process.platform === 'win32'
      ? `ping -n ${pingCount} ${host}`
      : `ping -c ${pingCount} ${host}`;

    const { stdout } = await execPromise(command);

    let pingTime: number;

    if (process.platform === 'win32') {
      const match = stdout.match(/Average = (\d+)ms/);
      pingTime = match ? parseInt(match[1], 10) : -1;
    } else {
      const match = stdout.match(/min\/avg\/max\/mdev = [\d.]+\/([^\/]+)\/[\d.]+\/[\d.]+/);
      pingTime = match ? parseFloat(match[1]) : -1;
    }

    return NextResponse.json({
      location,
      pingTime,
      success: pingTime > 0
    });
  } catch (error) {
    console.error('Ping error:', error);
    return NextResponse.json({
      location,
      pingTime: -1,
      success: false,
      error: 'Failed to ping host'
    }, { status: 500 });
  }
}