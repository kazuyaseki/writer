import { styled } from '@stitches/react';
import { MyEditor } from '../components/Editor';
import { Sidenav } from '../components/Sidenav';

export default function Home() {
  return (
    <Layout>
      <Sidenav />

      <MyEditor />
    </Layout>
  );
}

const Layout = styled('div', {
  display: 'flex',
});
