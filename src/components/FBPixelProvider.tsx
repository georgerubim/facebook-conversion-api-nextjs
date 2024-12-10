import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { fbPageView } from '../conversion-api';

type Props = {
  children: React.ReactNode;
  pixelId: string;
  accessToken: string;
};

const FBPixelProvider = ({ children, pixelId, accessToken }: Props) => {
  const router = useRouter();

  useEffect(() => {
    fbPageView(pixelId);

    router.events.on('routeChangeComplete', () => fbPageView(pixelId));
    return () => {
      router.events.off('routeChangeComplete', () => fbPageView(pixelId));
    };
  }, [router.events, pixelId]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};

export default FBPixelProvider;

