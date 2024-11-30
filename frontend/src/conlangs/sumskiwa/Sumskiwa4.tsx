import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Li, Ul } from '../Components.tsx';

export default function Sumskiwa4() {
  return (
    <>
      <Typography variant="h1">4 Grammar</Typography>

      <Typography variant="h2">4.1 Parts of Speech</Typography>

      <Typography variant="h3">4.1.1 Nouns</Typography>

      <Typography variant="h4">4.1.1.1 Noun Phrases</Typography>
      <Typography>Noun phrases are structured as followed:</Typography>
      <Typography>
        [Adposition] [Ordinal] Case-NOUN STEM-[Augmentative/Diminutive]
        [Adjective(s)] [Comparative] [Cardinal] [Demonstrative] [Genitive]
        [Relative Phrase]
      </Typography>
      <Typography>[] = optional part of noun phrase</Typography>
      {
        //TODO: example
      }

      <Typography variant="h4">4.1.1.2 Noun Cases</Typography>
      <Typography>
        There are 5 cases in Sumskiwa indicated using prefixes:
      </Typography>
      <Ul>
        <Li>Nominative: subject of intransitive verb</Li>
        <Li>Ergative: agent of transitive verb</Li>
        <Li>Accusative: patient of transitive verb</Li>
        <Li>Dative: indirect object of verb</Li>
        <Li>Genitive: modifier of another noun</Li>
      </Ul>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Nominative NOM</TableCell>
              <TableCell>ja-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ergative ERG</TableCell>
              <TableCell>di-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Accusative ACC</TableCell>
              <TableCell>ša-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dative DAT</TableCell>
              <TableCell>šo-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Genitive GEN</TableCell>
              <TableCell>ne-</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4">4.1.1.3 Gender</Typography>
      <Typography>
        There are 3 genders, and nouns are categorized purely through semantics,
        rather than through phonology or spelling.
      </Typography>
      <Ul>
        <Li>Human: humans, body parts, nouns relating to language</Li>
        <Li>Animate: animals, thoughts</Li>
        <Li>Inanimate: objects, plants, fungi</Li>
      </Ul>
      <Typography>
        Both adjectives and verbs must agree with nouns in gender.
      </Typography>
    </>
  );
}
