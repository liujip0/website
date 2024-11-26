import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <Box>
      Homepage<Link to="/conlangs">Conlangs</Link>
    </Box>
  );
}
