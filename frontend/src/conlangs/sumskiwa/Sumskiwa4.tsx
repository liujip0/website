import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Li, Ul } from '../Components.tsx';
import Gloss, { GlossedTranslation } from '../Gloss.tsx';
import { Th } from './Sumskiwa1.tsx';

export default function Sumskiwa4() {
  return (
    <>
      <Typography variant="h1">4 Grammar</Typography>

      <Typography variant="h2">4.1 Parts of Speech</Typography>

      <Typography variant="h3">4.1.1 Nouns</Typography>

      <Typography variant="h4">4.1.1.1 Noun Phrases</Typography>
      <Typography>Noun phrases are structured as followed:</Typography>
      <Typography>
        [Adposition] [Ordinal] Case-NOUN_STEM-[Augmentative/Diminutive]
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
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Nominative <Gloss gloss="NOM" />
              </TableCell>
              <TableCell>ja-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Ergative <Gloss gloss="ERG" />
              </TableCell>
              <TableCell>di-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Accusative <Gloss gloss="ACC" />
              </TableCell>
              <TableCell>ša-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Dative <Gloss gloss="DAT" />
              </TableCell>
              <TableCell>šo-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Genitive <Gloss gloss="GEN" />
              </TableCell>
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

      <Typography variant="h3">4.1.2 Verbs</Typography>

      <Typography variant="h4">4.1.2.1 Verb Phrases</Typography>
      <Typography>Verb phrases are structured as follows:</Typography>
      <Typography>
        [Question Particle]
        Mood-Aspect-VERB_STEM-Gender_of_S-Gender_of_A-Gender_of_P [Adverb(s)]
      </Typography>
      <Typography>[] = optional part of verb phrase</Typography>
      {
        //TODO: example
      }

      <Typography variant="h4">4.1.2.2 Mood</Typography>
      <Typography>Verbs have 4 moods marked using prefixes:</Typography>
      <Ul>
        <Li>Indicative: default, all realis statements</Li>
        <Li>Optative: wishes, hopes, and desires</Li>
        <Li>Deontic: how the world "ought" to be</Li>
        <Li>Subjunctive: all other irrealis statements</Li>
      </Ul>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Indicative <Gloss gloss="IND" />
              </TableCell>
              <TableCell>
                Ø- (s- if next syllable starts with a vowel)
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Optative <Gloss gloss="OPT" />
              </TableCell>
              <TableCell>št-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Deontic <Gloss gloss="DEO" />
              </TableCell>
              <TableCell>šuč-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Subjunctive <Gloss gloss="SJV" />
              </TableCell>
              <TableCell>y-</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography>
        Imperative statements use the deontic mood. [See 4.3.3 Imperatives]
        {
          //TODO: link
        }
      </Typography>

      <Typography variant="h4">4.1.2.3 Aspect</Typography>
      <Typography>Verbs have 4 aspects marked with prefixes:</Typography>
      <Ul>
        <Li>Perfective: complete action as a single event in time</Li>
        <Li>Habitual: habitual actions, repetition over multiple occasions</Li>
        <Li>Iterative: repeated actions, repetition at a single occasion</Li>
        <Li>
          Progressive: includes continuous, action in progress at a specific
          time
        </Li>
      </Ul>
      <TableContainer sx={{ flexShrink: 0 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Perfective <Gloss gloss="PFV" />
              </TableCell>
              <TableCell>-Ø- (-e- if preceded by a consonant)</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Habitual <Gloss gloss="HAB" />
              </TableCell>
              <TableCell>-ini-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Iterative <Gloss gloss="ITER" />
              </TableCell>
              <TableCell>-i-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Progressive <Gloss gloss="PROG" />
              </TableCell>
              <TableCell>-a-</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4">4.1.2.4 Agreement with Nouns</Typography>
      <Typography>
        Verbs agree with their subject, agent, and patient arguments in gender.
      </Typography>

      <Typography variant="h5">4.1.2.4.1 Subject Gender</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Human <Gloss gloss="H" />
              </TableCell>
              <TableCell>-po</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Animate <Gloss gloss="AN" />
              </TableCell>
              <TableCell>-žu</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Inanimate <Gloss gloss="INAN" />
              </TableCell>
              <TableCell>-šbi</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5">4.1.2.4.2 Agent Gender</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Human <Gloss gloss="H" />
              </TableCell>
              <TableCell>-jo</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Animate <Gloss gloss="AN" />
              </TableCell>
              <TableCell>-če</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Inanimate <Gloss gloss="INAN" />
              </TableCell>
              <TableCell>-spa</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5">4.1.2.4.3 Patient Gender</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Human <Gloss gloss="H" />
              </TableCell>
              <TableCell>-pon</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Animate <Gloss gloss="AN" />
              </TableCell>
              <TableCell>-šum</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Inanimate <Gloss gloss="INAN" />
              </TableCell>
              <TableCell>-žo</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h3">4.1.3 Adjectives</Typography>
      <Typography>Adjectives are structured as follows:</Typography>
      <Typography>Case-ADJECTIVE STEM-Gender</Typography>
      {
        //TODO: example
      }

      <Typography variant="h4">4.1.3.1 Agreement with Nouns</Typography>
      <Typography>
        Adjectives agree with the nouns they modify in case and gender.
      </Typography>

      <Typography variant="h5">4.1.3.1.1 Case</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Nominative <Gloss gloss="NOM" />
              </TableCell>
              <TableCell>ča-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Ergative <Gloss gloss="ERG" />
              </TableCell>
              <TableCell>ti-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Accusative <Gloss gloss="ACC" />
              </TableCell>
              <TableCell>ša-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Dative <Gloss gloss="DAT" />
              </TableCell>
              <TableCell>šo-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Genitive <Gloss gloss="GEN" />
              </TableCell>
              <TableCell>ne-</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5">4.1.3.1.2 Gender</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Human <Gloss gloss="H" />
              </TableCell>
              <TableCell>-po</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Animate <Gloss gloss="AN" />
              </TableCell>
              <TableCell>-žu</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Inanimate <Gloss gloss="INAN" />
              </TableCell>
              <TableCell>-šbi</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h3">4.1.4 Adverbs</Typography>
      <Typography>Adverb structure:</Typography>
      <Typography>Aspect-ADVERB STEM</Typography>
      {
        //TODO: example
      }

      <Typography variant="h4">4.1.4.1 Agreement with Verbs</Typography>
      <Typography>
        Adverbs follow the verbs they modify and agree with them in aspect.
      </Typography>

      <Typography variant="h5">4.1.4.1.1 Aspect</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Perfective <Gloss gloss="PFV" />
              </TableCell>
              <TableCell>Ø-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Habitual <Gloss gloss="HAB" />
              </TableCell>
              <TableCell>ni-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Iterative <Gloss gloss="ITER" />
              </TableCell>
              <TableCell>neye-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Progressive <Gloss gloss="PROG" />
              </TableCell>
              <TableCell>na-</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4">4.1.4.2 Agreement with Adjectives</Typography>
      <Typography>
        Adverbs follow the adjectives they modify and agree with them in gender.
      </Typography>

      <Typography variant="h5">4.1.4.2.1 Gender</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Human <Gloss gloss="H" />
              </TableCell>
              <TableCell>-po</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Animate <Gloss gloss="AN" />
              </TableCell>
              <TableCell>-šu</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Inanimate <Gloss gloss="INAN" />
              </TableCell>
              <TableCell>-šbe</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h3">4.1.5 Pronouns</Typography>
      <Typography>
        There are different pronoun forms for each of the 5 cases. Pronouns in
        Sumskiwa distinguish between 1st person exclusive and 1st person
        inclusive, and there are 3 politeness levels for 2nd person pronouns. In
        addition, there are 3 sets of pronouns for each of the 3 genders.
      </Typography>
      <Ul>
        <Li>1st Person Exclusive: 1st person, excluding the hearer</Li>
        <Li>1st Person Inclusive: 1st person, including the hearer</Li>
        <Li>
          2nd Person Polite: 2nd person, used in formal or neutral circumstances
        </Li>
        <Li>
          2nd Person Humilitive: 2nd person, used when speaking to figures of
          authority, elders, etc.
        </Li>
        <Li>
          2nd Person Familiar: 2nd person, used when speaking with friends
          and/or family members
        </Li>
        <Li>3rd Person: 3rd person</Li>
      </Ul>

      <Typography variant="h4">4.1.5.1 Human</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableHead>
            <TableRow>
              <Th></Th>
              <Th>
                Nominative <Gloss gloss="NOM" />
              </Th>
              <Th>
                Ergative <Gloss gloss="ERG" />
              </Th>
              <Th>
                Accusative <Gloss gloss="ACC" />
              </Th>
              <Th>
                Dative <Gloss gloss="DAT" />
              </Th>
              <Th>
                Genitive <Gloss gloss="GEN" />
              </Th>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <Th>
                1st Person Exclusive <Gloss gloss="1EX" />
              </Th>
              <TableCell>yem</TableCell>
              <TableCell>ya</TableCell>
              <TableCell>yu</TableCell>
              <TableCell>yeżo</TableCell>
              <TableCell>yañi</TableCell>
            </TableRow>
            <TableRow>
              <Th>
                1st Person Inclusive <Gloss gloss="1IN" />
              </Th>
              <TableCell>žem</TableCell>
              <TableCell>ža</TableCell>
              <TableCell>žu</TableCell>
              <TableCell>žeżo</TableCell>
              <TableCell>žiñi</TableCell>
            </TableRow>
            <TableRow>
              <Th>
                2nd Person Polite <Gloss gloss="2POL" />
              </Th>
              <TableCell>jišbem</TableCell>
              <TableCell>jišba</TableCell>
              <TableCell>jišbu</TableCell>
              <TableCell>jiżo</TableCell>
              <TableCell>jiši</TableCell>
            </TableRow>
            <TableRow>
              <Th>
                2nd Person Humiliative <Gloss gloss="2HUM" />
              </Th>
              <TableCell>żešbem</TableCell>
              <TableCell>żešba</TableCell>
              <TableCell>żešbu</TableCell>
              <TableCell>żežo</TableCell>
              <TableCell>żeši</TableCell>
            </TableRow>
            <TableRow>
              <Th>
                2nd Person Familiar <Gloss gloss="2FAM" />
              </Th>
              <TableCell>šbem</TableCell>
              <TableCell>šba</TableCell>
              <TableCell>šbu</TableCell>
              <TableCell>šbeżo</TableCell>
              <TableCell>šbiñi</TableCell>
            </TableRow>
            <TableRow>
              <Th>
                3rd Person <Gloss gloss="3" />
              </Th>
              <TableCell>čem</TableCell>
              <TableCell>ča</TableCell>
              <TableCell>ču</TableCell>
              <TableCell>čużo</TableCell>
              <TableCell>čañi</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4">4.1.5.2 Animate</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableHead>
            <TableRow>
              <Th></Th>
              <Th>
                Nominative <Gloss gloss="NOM" />
              </Th>
              <Th>
                Ergative <Gloss gloss="ERG" />
              </Th>
              <Th>
                Accusative <Gloss gloss="ACC" />
              </Th>
              <Th>
                Dative <Gloss gloss="DAT" />
              </Th>
              <Th>
                Genitive <Gloss gloss="GEN" />
              </Th>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                2nd Person <Gloss gloss="2" />
              </TableCell>
              <TableCell>consi</TableCell>
              <TableCell>consan</TableCell>
              <TableCell>conso</TableCell>
              <TableCell>sonsuče</TableCell>
              <TableCell>consuči</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                3rd Person <Gloss gloss="3" />
              </TableCell>
              <TableCell>si</TableCell>
              <TableCell>san</TableCell>
              <TableCell>so</TableCell>
              <TableCell>suče</TableCell>
              <TableCell>suči</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4">4.1.5.3 Inanimate</Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableHead>
            <TableRow>
              <Th></Th>
              <Th>
                Nominative <Gloss gloss="NOM" />
              </Th>
              <Th>
                Ergative <Gloss gloss="ERG" />
              </Th>
              <Th>
                Accusative <Gloss gloss="ACC" />
              </Th>
              <Th>
                Dative <Gloss gloss="DAT" />
              </Th>
              <Th>
                Genitive <Gloss gloss="GEN" />
              </Th>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                3rd Person <Gloss gloss="3" />
              </TableCell>
              <TableCell>yo</TableCell>
              <TableCell>zin</TableCell>
              <TableCell>je</TableCell>
              <TableCell>sayo</TableCell>
              <TableCell>zeyo</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h2">4.2 Noun and Noun-Phrase Operations</Typography>

      <Typography variant="h3">4.2.1 Noun-Noun Compounding</Typography>
      <Typography>
        Nouns are compounded by juxtaposition, with the new combined form
        inflected as one word.
      </Typography>
      {
        //TODO: example
      }

      <Typography variant="h3">4.2.2 Denominalization</Typography>

      <Typography variant="h4">4.2.2.1 Verbalization</Typography>
      <Typography>
        There are two ways nouns can be verbalized, with different meanings. In
        both cases, morphological changes are applied to the uninflected forms
        of the nouns.
      </Typography>
      <Typography>
        The prefix do- converts the noun into a verb meaning "to become [noun]."
      </Typography>
      {
        //TODO: example
      }
      <Typography>
        The prefix ke- changes the noun into a verb that means "to have [noun]."
      </Typography>
      {
        //TODO: example
      }

      <Typography variant="h4">4.2.2.2 Adjectivization</Typography>
      <Typography>
        A noun can take adjectival case and gender markings to become an
        adjective meaning "similar to [noun]."
      </Typography>
      {
        //TODO: example
      }

      <Typography variant="h2">4.3 Verb and Verb-Phrase Operations</Typography>

      <Typography variant="h3">4.3.1 Negation</Typography>
      <Typography>
        When verbs are negated, the first consonant of the verb stem changes
        from a voiced consonant to an unvoiced one, and the clause-level word
        order changes form VAP/VS (VSO) to AVP/SV (SVO). If the initial
        consonant is &lt;y&gt; or &lt;w&gt;, it becomes &lt;n&gt;, &lt;m&gt;, or
        &lt;ñ&gt;, and vice versa. Which one the consonant becomes is
        unpredictable and must be memorized on a per-word basis.
      </Typography>
      <GlossedTranslation
        morphological="że  ċe"
        gloss={'to\u00a0give  to\u00a0not\u00a0give'}
      />
      {
        //TODO: example with y/w
      }

      <Typography variant="h3">4.3.2 Interrogatives</Typography>

      <Typography variant="h4">4.3.2.1 Yes/No Questions</Typography>
      <Typography>
        Yes/no questions are marked by placing the question particle šgezu at
        the beginning of the sentence.
      </Typography>
      <GlossedTranslation
        phonetic="šgezu sażespažo dižojem šakiši"
        morphological="šgezu s-a-że-spa-žo di-žojem ša-kiši"
        gloss="YN IND-PROG-give-INAN-INAN <Gloss gloss='ERG' />-sun <Gloss gloss='ACC' />-light"
        translation="Does the sun shine?"
        literalTranslation="Does the sun give light?"
        indent={false}
      />

      <Typography variant="h4">4.3.2.2 Content Questions</Typography>
      <Typography>
        Content questions use the same interrogative marker as yes/no questions
        but also use the following question words in situ:
      </Typography>
      <TableContainer
        sx={{
          flexShrink: 0
        }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Nominative Noun</TableCell>
              <TableCell>sensu</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ergative Noun</TableCell>
              <TableCell>senyu</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Accusative Noun</TableCell>
              <TableCell>senge</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dative Noun</TableCell>
              <TableCell>senbi</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Genitive Noun</TableCell>
              <TableCell>senžo</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Time Adverb</TableCell>
              <TableCell>šanbi</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Location Adverb</TableCell>
              <TableCell>šanzim</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Manner Adverb</TableCell>
              <TableCell>šanže</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Purpose/Reason Adverb</TableCell>
              <TableCell>šansum</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {
        //TODO: example
      }

      <Typography variant="h3">4.3.3 Imperatives</Typography>
      <Typography>
        Imperatives are in the deontic mood and have either the imperative
        particle sesum or the negative imperative particle dosika in front of
        the sentence. When the speaker is telling the hearer to do something,
        the agent is dropped and the patient goes into the nominative case.
      </Typography>
      {
        //TODO: example
      }
      <Typography>
        When both the agent and patient are present in the sentence, the speaker
        is telling the hearer to ask the agent to perform the action.
      </Typography>
      {
        //TODO: example
      }

      <Typography variant="h4">4.3.3.1 Polite Imperatives</Typography>
    </>
  );
}
