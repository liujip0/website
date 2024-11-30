import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';

export default function Sumskiwa0() {
  const categoriesRef = useRef<HTMLInputElement>(null);
  const syllablesRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Typography variant="h1">0 Util</Typography>

      <Typography variant="h2">0.1 gen - language text generator</Typography>
      <Typography variant="body1">
        <a
          href="https://www.zompist.com/gen.html"
          target="_blank">
          https://www.zompist.com/gen.html
        </a>
      </Typography>
      <Box
        sx={{
          display: 'flex'
        }}>
        <TextField
          value={`C=šžszčjywcżpbtdkgmnñ
                  V=iueoa
                  N=nñm
                  S=šs
                  P=pbtdkg
                `.replace(/ /g, '')}
          inputRef={categoriesRef}
          variant="outlined"
          disabled
          multiline
        />
        <Button
          onClick={() => {
            if (categoriesRef.current) {
              categoriesRef.current.select();
              categoriesRef.current.setSelectionRange(0, 99999);
              navigator.clipboard.writeText(categoriesRef.current.value);
            }
          }}>
          Copy
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex'
        }}>
        <TextField
          value={`CV
                  SPV
                  CVN
                  SPVN
                `.replace(/ /g, '')}
          inputRef={syllablesRef}
          variant="outlined"
          disabled
          multiline
        />
        <Button
          onClick={() => {
            if (syllablesRef.current) {
              syllablesRef.current.select();
              syllablesRef.current.setSelectionRange(0, 99999);
              navigator.clipboard.writeText(syllablesRef.current.value);
            }
          }}>
          Copy
        </Button>
      </Box>
    </>
  );
}
