import Typography from '@mui/material/Typography';
import { GlossedTranslation } from '../Gloss.tsx';

export default function Sumskiwa2() {
  return (
    <>
      <Typography variant="h1">2 Typology</Typography>

      <Typography variant="h2">2.1 Word Order</Typography>

      <Typography>
        The default sentence structure in Sumskiwa is VAP/VS (VSO). Negative
        clauses are AVP/SV (SVO), and nouns can be topicalized by moving them to
        the front of the clause.
      </Typography>
      <GlossedTranslation
        phonetic="sażespažo dižojem šakiši"
        morphological="s-a-że-spa-žo di-žojem ša-kiši"
        gloss="IND-PROG-give-INAN-INAN ERG-sun ACC-light"
        translation="The sun shines."
        literalTranslation="The sun gives light."
      />

      <Typography variant="h2">2.2 Morphological Typology</Typography>

      <Typography variant="h3">2.2.1 Synthesis</Typography>
      <Typography>
        Sumskiwa is a somewhat polysynthetic language, with many morphemes
        occuring in each word.
      </Typography>

      <Typography variant="h3">2.2.2 Fusion</Typography>
      <Typography>
        Sumskiwa is highly agglutinative, with most morphemes having only one
        meaning.
      </Typography>

      <Typography variant="h3">2.2.3 Morphological Processes</Typography>
      <Typography>
        Sumskiwa inflects its words mostly through the use of prefixes. There
        are also a few suffixes and stem modifications.
      </Typography>
    </>
  );
}
