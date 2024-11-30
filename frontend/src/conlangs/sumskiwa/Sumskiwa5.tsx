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
} & (
  | {
      partOfSpeech: 'verb' | 'adjective' | 'adverb' | 'affix';
    }
  | {
      partOfSpeech: 'noun' | 'pronoun';
      gender: 'human' | 'animate' | 'inanimate';
    }
))[] = [];

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
            </TableRow>
          </TableHead>
          <TableBody>
            {Lexicon.map((word) => (
              <TableRow>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
