import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Gloss from '../Gloss.tsx';

export default function Sumskiwa1() {
  //TODO: finish this
  return (
    <>
      <Typography variant="h1">1 Introduction</Typography>
      <Typography variant="h2">1.1 Terms & Abbreviations</Typography>
      <Typography variant="h3">1.1.1 Glossing Abbreviations</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <Th>Term</Th>
              <Th>Abbreviation</Th>
              <Th>Type</Th>
              <Th>Definition</Th>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1st person exclusive</TableCell>
              <TableCell>
                <Gloss gloss="1EX" />
              </TableCell>
              <TableCell>person</TableCell>
              <TableCell>1st person, not including the hearer</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1st person inclusive</TableCell>
              <TableCell>
                <Gloss gloss="1IN" />
              </TableCell>
              <TableCell>person</TableCell>
              <TableCell>1st person, including the hearer</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2nd person</TableCell>
              <TableCell>
                <Gloss gloss="2" />
              </TableCell>
              <TableCell>person</TableCell>
              <TableCell>2nd person</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2nd person polite</TableCell>
              <TableCell>
                <Gloss gloss="2POL" />
              </TableCell>
              <TableCell>person</TableCell>
              <TableCell>
                2nd person, used in formal or neutral circumstances
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2nd person humiliative</TableCell>
              <TableCell>
                <Gloss gloss="2HUM" />
              </TableCell>
              <TableCell>person</TableCell>
              <TableCell>
                2nd person, used when speaking to figures of authority
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2nd person familiar</TableCell>
              <TableCell>
                <Gloss gloss="2FAM" />
              </TableCell>
              <TableCell>person</TableCell>
              <TableCell>
                2nd person, used when speaking with friends or family
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3rd person</TableCell>
              <TableCell>
                <Gloss gloss="3" />
              </TableCell>
              <TableCell>person</TableCell>
              <TableCell>3rd person</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>accusative</TableCell>
              <TableCell>
                <Gloss gloss="ABS" />
              </TableCell>
              <TableCell>noun case</TableCell>
              <TableCell>
                {/*TODO link to patient definition*/}
                patient of a transitive verb
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>animate</TableCell>
              <TableCell>
                <Gloss gloss="AN" />
              </TableCell>
              <TableCell>gender</TableCell>
              <TableCell>animals and thoughts</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>dative</TableCell>
              <TableCell>
                <Gloss gloss="DAT" />
              </TableCell>
              <TableCell>noun case</TableCell>
              <TableCell>indirect object of a verb</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>deontic</TableCell>
              <TableCell>
                <Gloss gloss="DEO" />
              </TableCell>
              <TableCell>verb mood</TableCell>
              <TableCell>
                how the speaker thinks the world "ought" to be
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ergative</TableCell>
              <TableCell>
                <Gloss gloss="ERG" />
              </TableCell>
              <TableCell>noun case</TableCell>
              <TableCell>agent of a transitive verb</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>genitive</TableCell>
              <TableCell>
                <Gloss gloss="GEN" />
              </TableCell>
              <TableCell>noun case</TableCell>
              <TableCell>noun that modifies another noun</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>habitual</TableCell>
              <TableCell>
                <Gloss gloss="HAB" />
              </TableCell>
              <TableCell>verb aspect</TableCell>
              <TableCell>
                habitual action repeated across multiple occasions
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>human</TableCell>
              <TableCell>
                <Gloss gloss="H" />
              </TableCell>
              <TableCell>gender</TableCell>
              <TableCell>
                humans, body parts, and nouns relating to language
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h2">1.2 Symbols</Typography>
    </>
  );
}

type ThProps = {
  children: React.ReactNode;
};
export function Th({ children }: ThProps) {
  return (
    <TableCell>
      <Typography
        sx={{
          fontWeight: 'bold'
        }}>
        {children}
      </Typography>
    </TableCell>
  );
}
