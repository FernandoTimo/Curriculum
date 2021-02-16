import style from 'styles/css/Index.module.css';
import { Header_Main } from 'heads/Header_Main';
import { Body, Section, Content } from 'components/Resources/Timoideas';
import Presentacion from 'components/FisrtStep';
import Stack from 'components/SecondStep';
import GitHub from 'components/ThirdStep';
import Complementos from 'components/FourthStep';
import Contacto from 'components/FifthStep';
export default function Index() {
  return (
    <>
      <Header_Main />
      <Body>
        <Section size={1}>
          <Presentacion />
        </Section>
        <Section size={1}>
          <Stack />
        </Section>
        <Section size={1}>
          <GitHub />
        </Section>
        <Section size={1}>
          <Complementos />
        </Section>
        <Section size={1}>
          <Contacto />
        </Section>
      </Body>
    </>
  );
}
