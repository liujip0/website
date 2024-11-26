import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Sumskiwa0 from './Sumskiwa0.tsx';
import Sumskiwa1 from './Sumskiwa1.tsx';
import Sumskiwa2 from './Sumskiwa2.tsx';
import SumskiwaNavList from './SumskiwaNavList.tsx';

import Sumskiwa3 from './Sumskiwa3.tsx';
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
      <Box
        sx={{
          flex: 1,
          height: 1,
          padding: 2,
          overflowY: 'scroll'
        }}>
        <Sumskiwa0 />
        <Sumskiwa1 />
        <Sumskiwa2 />
        <Sumskiwa3 />
      </Box>
    </Box>
  );
}
