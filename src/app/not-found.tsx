import {notFound} from 'next/navigation';

// This page renders when a route is requested that doesn't exist.
export default function GlobalNotFound() {
  notFound();
}
