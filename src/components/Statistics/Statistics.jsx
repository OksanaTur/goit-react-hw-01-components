import data from '../Statistics/data.json';
import { DataStats } from './DataStats/DataStats';
import { Section } from './Section.styled';
import { Head } from './Title/Title';

export const Statistics = () => {
    return(
    <Section>
       <Head text="Upload stats" />
       <DataStats items={data}/>
    </Section>)
}