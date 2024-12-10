'use client'

import ArrowIcon from '../../assets/icons/Arrow';
import { useRouter } from 'next/navigation';

export default function BackArrow() {
  const router = useRouter();

  return (
    <button
      className="-rotate-90"
      type="button"
      onClick={() => router.back()} >
        <ArrowIcon />
    </button>
  );
}
