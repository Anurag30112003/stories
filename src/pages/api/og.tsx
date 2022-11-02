import { ImageResponse } from '@vercel/og';

// make this as edge function
export const config = {
  runtime: 'experimental-edge',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          color:'white',
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      > Get Short Story 🚀
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}