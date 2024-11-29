import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Sumskiwa0 from './Sumskiwa0.tsx';
import Sumskiwa1 from './Sumskiwa1.tsx';
import Sumskiwa2 from './Sumskiwa2.tsx';
import Sumskiwa3 from './Sumskiwa3.tsx';
import SumskiwaNavList from './SumskiwaNavList.tsx';

export default function Sumskiwa() {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: 'flex'
      }}>
      <SumskiwaNavList />
      <Divider orientation="vertical" />
      <Stack
        sx={{
          flex: 1,
          height: 1,
          padding: 2,
          overflowY: 'scroll',
          gap: 1
        }}>
        <Sumskiwa0 />
        <Sumskiwa1 />
        <Sumskiwa2 />
        <Sumskiwa3 />
      </Stack>
    </Box>
  );
}
