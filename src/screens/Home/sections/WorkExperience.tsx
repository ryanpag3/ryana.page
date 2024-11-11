import JobExperience from '../../../components/JobExperience';
import Section from '../../../components/Section';
import Experience from '../../../content/experience.json';

export default function WorkExperienceSection() {
    return (
        <Section title="Experience">
            {Experience.map((job, index) => (
                <JobExperience key={index} job={job as any} />
            ))}
        </Section>
    );
}