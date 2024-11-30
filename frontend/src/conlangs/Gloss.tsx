import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

const GlossingAbbreviations = {
  '1EX': '1st person exclusive',
  '1IN': '1st person inclusive',
  '2': '2nd person',
  '2POL': '2nd person polite',
  '2HUM': '2nd person humiliative',
  '2FAM': '2nd person familiar',
  '3': '3rd person',
  ABS: 'absolutive case',
  AN: 'animate gender',
  DAT: 'dative case',
  DEO: 'deontic mood',
  ERG: 'ergative case',
  GEN: 'genitive case',
  HAB: 'habitual aspect',
  H: 'human gender'
};

type GlossProps = {
  gloss: keyof typeof GlossingAbbreviations;
};
export default function Gloss({ gloss }: GlossProps) {
  return <Typography component="span">{gloss}</Typography>;
}

type GlossedTranslationProps = {
  orthographic?: string;
  phonetic?: string;
  morphological: string;
  gloss: string;
  translation?: string;
  literalTranslation?: string;
  indent?: boolean;
};
export function GlossedTranslation({
  orthographic,
  phonetic,
  morphological,
  gloss,
  translation,
  literalTranslation,
  indent = true
}: GlossedTranslationProps) {
  const morphologicalArr = morphological.split(' ');
  const glossArr = gloss.split(' ');
  return (
    <Stack
      sx={{
        ml: indent ? 4 : 0
      }}>
      {orthographic && <Typography>{orthographic}</Typography>}
      {phonetic && <Typography>{phonetic}</Typography>}
      <Stack direction="row">
        {morphologicalArr.map((morphology, index) => (
          <Stack
            sx={{
              pl: index !== 0 ? 1 : 0,
              pr: 1
            }}>
            <Typography>{morphology}</Typography>
            <Typography>{glossArr[index]}</Typography>
          </Stack>
        ))}
      </Stack>
      {translation && (
        <Typography>
          "{translation}"
          {literalTranslation && <> (lit. "{literalTranslation}")</>}
        </Typography>
      )}
    </Stack>
  );
}
