import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Th } from './Sumskiwa1.tsx';

export default function Sumskiwa3() {
  return (
    <>
      <Typography variant="h1">3 Phonology</Typography>

      <Typography variant="h2">3.1 Consonants</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableHead>
            <TableRow>
              <Th></Th>
              <Th colSpan={2}>Bilabial</Th>
              <Th colSpan={2}>Alveolar</Th>
              <Th colSpan={2}>Postalveolar</Th>
              <Th colSpan={2}>Palatal</Th>
              <Th colSpan={2}>Labiovelar</Th>
              <Th colSpan={2}>Velar</Th>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <Th>Plosive</Th>
              <PhonoTd>
                [pʰ]
                <br />
                /p/
                <br />
                &lt;p&gt;
              </PhonoTd>
              <PhonoTd>
                [b]
                <br />
                /b/
                <br />
                &lt;b&gt;
              </PhonoTd>
              <PhonoTd>
                [tʰ]
                <br />
                /t/
                <br />
                &lt;t&gt;
              </PhonoTd>
              <PhonoTd>
                [d]
                <br />
                /d/
                <br />
                &lt;d&gt;
              </PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd>
                [kʰ]
                <br />
                /k/
                <br />
                &lt;k&gt;
              </PhonoTd>
              <PhonoTd>
                [g]
                <br />
                /g/
                <br />
                &lt;g&gt;
              </PhonoTd>
            </TableRow>
            <TableRow>
              <Th>Nasal</Th>
              <PhonoTd></PhonoTd>
              <PhonoTd>
                [m]
                <br />
                /m/
                <br />
                &lt;m&gt;
              </PhonoTd>
              <PhonoTd></PhonoTd>
              <PhonoTd>
                [n]
                <br />
                /n/
                <br />
                &lt;n&gt;
              </PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd></PhonoTd>
              <PhonoTd>
                [ŋ]
                <br />
                /ŋ/
                <br />
                &lt;ñ&gt;
              </PhonoTd>
            </TableRow>
            <TableRow>
              <Th>Fricative</Th>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd>
                [s]
                <br />
                /s/
                <br />
                &lt;s&gt;
              </PhonoTd>
              <PhonoTd>
                [z]
                <br />
                /z/
                <br />
                &lt;z&gt;
              </PhonoTd>
              <PhonoTd>
                [ʃ]
                <br />
                /ʃ/
                <br />
                &lt;š&gt;
              </PhonoTd>
              <PhonoTd>
                [ʒ]
                <br />
                /ʒ/
                <br />
                &lt;ž&gt;
              </PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
            </TableRow>
            <TableRow>
              <Th>Approximant</Th>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd colSpan={2}>
                [j]
                <br />
                /j/
                <br />
                &lt;y&gt;
              </PhonoTd>
              <PhonoTd colSpan={2}>
                [w]
                <br />
                /w/
                <br />
                &lt;w&gt;
              </PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
            </TableRow>
            <TableRow>
              <Th>Affricate</Th>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd>
                [t͡s]
                <br />
                /t͡s/
                <br />
                &lt;ċ&gt;
              </PhonoTd>
              <PhonoTd>
                [d͡z]
                <br />
                /d͡z/
                <br />
                &lt;ż&gt;
              </PhonoTd>
              <PhonoTd>
                [t͡ʃ]
                <br />
                /t͡ʃ/
                <br />
                &lt;č&gt;
              </PhonoTd>
              <PhonoTd>
                [d͡ʒ]
                <br />
                /d͡ʒ/
                <br />
                &lt;j&gt;
              </PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
              <PhonoTd colSpan={2}></PhonoTd>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h2">3.2 Vowels</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableHead>
            <TableRow>
              <Th></Th>
              <Th>Front</Th>
              <Th>Back</Th>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <Th>Close</Th>
              <PhonoTd>
                [i]
                <br />
                /i/
                <br />
                &lt;i&gt;
              </PhonoTd>
              <PhonoTd>
                [u]
                <br />
                /u/
                <br />
                &lt;u&gt;
              </PhonoTd>
            </TableRow>
            <TableRow>
              <Th>Mid</Th>
              <PhonoTd>
                [e~ɛ]
                <br />
                /e/
                <br />
                &lt;e&gt;
              </PhonoTd>
              <PhonoTd>
                [o]
                <br />
                /o/
                <br />
                &lt;o&gt;
              </PhonoTd>
            </TableRow>
            <TableRow>
              <Th>Open</Th>
              <PhonoTd>
                [a]
                <br />
                /a/
                <br />
                &lt;a&gt;
              </PhonoTd>
              <PhonoTd></PhonoTd>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h2">3.3 Syllable Structure</Typography>
      <Typography>
        Syllables in Sumskiwa consist of an onset, a nucleus, and a rhyme. Most
        syllables are open.
      </Typography>
      <Typography>Syllable possibilities:</Typography>
      <Typography>
        CV(N)
        <br />
        C = p, b, t, d, k, g, m, n, ñ, s, z, š, ž, y, w, c, ż, č, j<br />
        V = i, u, e, o, a<br />N = m, n, ñ
      </Typography>
      <Typography>
        SPV(N)
        <br />
        S = s, š<br />
        P = b, d, g<br />
        V = i, u, e, o, a<br />N = m, n, ñ
      </Typography>

      <Typography variant="h2">3.4 Stress</Typography>
      <Typography>
        Stress always falls on the penultimate syllable of the word stem and
        does not move when prefixes or suffixes are added.
      </Typography>
    </>
  );
}

type PhonoTdProps = {
  colSpan?: number;
  children?: React.ReactNode;
};
function PhonoTd({ colSpan, children }: PhonoTdProps) {
  return (
    <TableCell
      colSpan={colSpan}
      sx={{
        borderLeftStyle: 'solid',
        borderLeftWidth: '1px',
        borderLeftColor: '#f4f4f4'
      }}>
      {children}
    </TableCell>
  );
}
