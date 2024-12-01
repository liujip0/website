import Typography from '@mui/material/Typography';
import { Li, Ol } from '../Components.tsx';
import { GlossedTranslation } from '../Gloss.tsx';

export default function Sumskiwa6() {
  return (
    <>
      <Typography variant="h1">6 Translations</Typography>
      <Ol>
        <Li>
          <GlossedTranslation
            phonetic="sażespažo dižojem šakiši"
            morphological="s-a-że-spa-žo di-žojem ša-kiši"
            gloss="IND-PROG-give-INAN-INAN <Gloss gloss='ERG' />-sun <Gloss gloss='ACC' />-light"
            translation="The sun shines."
            literalTranslation="The sun gives light."
            indent={false}
          />
        </Li>
        <Li>
          <GlossedTranslation
            phonetic="šgezu sażespažo dižojem šakiši"
            morphological="šgezu s-a-że-spa-žo di-žojem ša-kiši"
            gloss="YN IND-PROG-give-INAN-INAN <Gloss gloss='ERG' />-sun <Gloss gloss='ACC' />-light"
            translation="Does the sun shine?"
            literalTranslation="Does the sun give light?"
            indent={false}
          />
        </Li>
      </Ol>
    </>
  );
}
