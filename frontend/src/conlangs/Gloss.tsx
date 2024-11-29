import Typography from '@mui/material/Typography';

const glossingAbbreviations = {
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
  gloss: keyof typeof glossingAbbreviations;
};
export default function Gloss({ gloss }: GlossProps) {
  return <Typography component="span">{gloss}</Typography>;
}
