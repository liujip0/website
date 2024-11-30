import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

export default function Sumskiwa6() {
  return (
    <>
      <Typography variant="h1">6 Translations</Typography>
      <List component="ol">
        <ListItem>
          <GlossedTranslation
            morphological=""
            gloss=""
            translation="The sun shines."
          />
        </ListItem>
      </List>
    </>
  );
}

type GlossedTranslationProps = {
  orthographic?: string;
  phonetic?: string;
  morphological: string;
  gloss: string;
  translation?: string;
};
export function GlossedTranslation({
  orthographic,
  phonetic,
  morphological,
  gloss,
  translation
}: GlossedTranslationProps) {
  const morphologicalArr = morphological.split(' ');
  const glossArr = gloss.split(' ');
  return (
    <List
      component="ol"
      sx={{
        display: 'inline'
      }}>
      {morphologicalArr.map((morphology, index) => (
        <ListItem>
          <List
            component="ol"
            sx={{
              padding: 0.5,
              mb: 0.5,
              float: 'left',
              display: 'inline-block'
            }}>
            <ListItem>{morphology}</ListItem>
            <ListItem>{glossArr[index]}</ListItem>
          </List>
        </ListItem>
      ))}
    </List>
  );
}
