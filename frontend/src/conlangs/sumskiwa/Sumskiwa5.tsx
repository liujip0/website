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

// eslint-disable-next-line react-refresh/only-export-components
export const Lexicon: ({
  orthography?: string;
  romanization: string;
  definition: string;
  notes?: string;
} & (
  | {
      partOfSpeech: 'verb' | 'adjective' | 'adverb' | 'affix';
    }
  | {
      partOfSpeech: 'noun' | 'pronoun';
      gender: 'human' | 'animate' | 'inanimate';
    }
))[] = [
  {
    romanization: 'žojem',
    partOfSpeech: 'noun',
    gender: 'inanimate',
    definition: 'sun'
  },
  {
    romanization: 'kiši',
    partOfSpeech: 'noun',
    gender: 'inanimate',
    definition: 'light'
  },
  {
    romanization: 'że',
    partOfSpeech: 'verb',
    definition: 'to give'
  }
];

export default function Sumskiwa5() {
  return (
    <>
      <Typography variant="h1">5 Lexicon</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableHead>
            <TableRow>
              <Th>Orthography</Th>
              <Th>Romanization</Th>
              <Th>Part of Speech</Th>
              <Th>Gender</Th>
              <Th>Definition</Th>
              <Th>Notes</Th>
            </TableRow>
          </TableHead>
          <TableBody>
            {Lexicon.map((word, index) => (
              <TableRow key={index}>
                <TableCell>{word.orthography}</TableCell>
                <TableCell>{word.romanization}</TableCell>
                <TableCell>{word.partOfSpeech}</TableCell>
                <TableCell>
                  {word.partOfSpeech === 'noun' ||
                  word.partOfSpeech === 'pronoun'
                    ? word.gender
                    : '-'}
                </TableCell>
                <TableCell>{word.definition}</TableCell>
                <TableCell>{word.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
