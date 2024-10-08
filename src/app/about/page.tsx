import {
    Avatar,
    Button,
    Flex,
    Heading,
    Icon,
    IconButton,
    SmartImage,
    Tag,
    Text,
} from '@/once-ui/components';
import { person, about, social, baseURL } from '@/app/resources';
import TableOfContents from '@/app/about/components/TableOfContents';
import styles from '@/app/about/about.module.scss';

export function generateMetadata() {
    const title = about.title;
    const description = about.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/blog`,
            images: [{ url: ogImage, alt: title }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

const structure = [
    {
        title: about.intro.title,
        display: about.intro.display,
        items: [],
    },
    {
        title: about.work.title,
        display: about.work.display,
        items: about.work.experiences.map((experience) => experience.company),
    },
    {
        title: about.studies.title,
        display: about.studies.display,
        items: about.studies.institutions.map((institution) => institution.name),
    },
    {
        title: about.technical.title,
        display: about.technical.display,
        items: about.technical.skills.map((skill) => skill.title),
    },
];

export default function About() {
    return (
        <Flex
            style={{ width: '80%', height: '100%', overflow: 'hidden' }}
            fillWidth
            direction="column"
        >
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: about.intro.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:'))
                            .map((item) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: about.work.experiences[0]?.company || '',
                        },
                    }),
                }}
            />
            {about.tableOfContent.display && (
                <Flex
                    style={{ left: '5%', top: '50%', transform: 'translateY(-50%)' }}
                    position="fixed"
                    paddingLeft="24"
                    gap="32"
                    direction="column"
                    hide="s"
                >
                    <TableOfContents structure={structure} about={about} />
                </Flex>
            )}
            <Flex fillWidth mobileDirection="column" justifyContent="center">
                {about.avatar.display && (
                    <Flex
                        minWidth="160"
                        paddingX="l"
                        paddingBottom="xl"
                        gap="m"
                        flex={3}
                        direction="column"
                        alignItems="center"
                    >
                        <Avatar src={person.avatar} size="xl" />
                        <Flex gap="8" alignItems="center">
                            <Icon onBackground="accent-weak" name="globe" />
                            {person.location}
                        </Flex>
                        {person.languages.length > 0 && (
                            <Flex wrap gap="4">
                                <Flex
                                    style={{ 
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                        gap: '8px',
                                        width: '40%',
                                        marginLeft: '25%' 
                                    }}
                                >
                                    {person.languages.map((language, index) => (
                                        <Tag key={index} size="l">
                                            {language}
                                        </Tag>
                                    ))}
                                </Flex>
                            </Flex>
                        )}
                    </Flex>
                )}
                <Flex
                    className={styles.blockAlign}
                    fillWidth
                    flex={9}
                    maxWidth={40}
                    direction="column"
                >
                    <Flex
                        id={about.intro.title}
                        fillWidth
                        minHeight="160"
                        direction="column"
                        justifyContent="center"
                        marginBottom="32"
                    >
                        {about.calendar.display && (
                            <Flex
                                className={styles.blockAlign}
                                style={{
                                    backdropFilter: 'blur(var(--static-space-1))',
                                    border: '1px solid var(--brand-alpha-medium)',
                                    width: 'fit-content',
                                }}
                                alpha="brand-weak"
                                radius="full"
                                fillWidth
                                padding="4"
                                gap="8"
                                marginBottom="m"
                                alignItems="center"
                            >
                                <Flex paddingLeft="12">
                                    <Icon name="calendar" onBackground="brand-weak" />
                                </Flex>
                                <Flex paddingX="8">Schedule a call</Flex>
                                <IconButton
                                    href={about.calendar.link}
                                    data-border="rounded"
                                    variant="tertiary"
                                    icon="chevronRight"
                                />
                            </Flex>
                        )}
                        <Heading className={styles.textAlign} variant="display-strong-xl">
                            {person.name}
                        </Heading>
                        <Text
                            className={styles.textAlign}
                            variant="display-default-xs"
                            onBackground="neutral-weak"
                        >
                            {person.role}
                        </Text>
                        {social.length > 0 && (
                            <Flex
                                className={styles.blockAlign}
                                paddingTop="20"
                                paddingBottom="8"
                                gap="8"
                                wrap
                            >
                                {social.map((item) =>
                                    item.link ? (
                                        <Button
                                            key={item.name}
                                            href={item.link}
                                            prefixIcon={item.icon}
                                            label={item.name}
                                            size="s"
                                            variant="tertiary"
                                        />
                                    ) : null
                                )}
                            </Flex>
                        )}
                    </Flex>

                    {about.intro.display && (
                        <Flex
                            direction="column"
                            textVariant="body-default-l"
                            fillWidth
                            gap="m"
                            marginBottom="xl"
                        >
                            {about.intro.description}
                        </Flex>
                    )}

                    {about.work.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.work.title}
                                variant="display-strong-s"
                                marginBottom="m"
                            >
                                {about.work.title}
                            </Heading>
                            <Flex direction="column" fillWidth gap="l" marginBottom="40">
                                {about.work.experiences.map((experience, index) => (
                                    <Flex key={`${experience.company}-${experience.role}-${index}`} fillWidth direction="column">
                                        <Flex
                                            fillWidth
                                            justifyContent="space-between"
                                            alignItems="flex-end"
                                            marginBottom="4"
                                        >
                                            <Text id={experience.company} variant="heading-strong-l">
                                                {experience.company}
                                            </Text>
                                            <Text variant="heading-default-xs" onBackground="neutral-weak">
                                                {experience.timeframe}
                                            </Text>
                                        </Flex>
                                        <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                                            {experience.role}
                                        </Text>
                                        <Flex as="ul" direction="column" gap="16">
                                            {experience.achievements.map((achievement, index) => (
                                                <Text as="li" variant="body-default-m" key={`${experience.company}-${index}`}>
                                                    {achievement}
                                                </Text>
                                            ))}
                                        </Flex>
                                        {experience.images.length > 0 && (
                                            <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                                                {experience.images.map((image, index) => (
                                                    <Flex
                                                        key={index}
                                                        border="neutral-medium"
                                                        borderStyle="solid-1"
                                                        radius="m"
                                                        style={{
                                                            width: '1920px',
                                                            height: '1080px',
                                                        }}
                                                    >
                                                        <SmartImage
                                                            enlarge
                                                            radius="m"
                                                            sizes="1920"
                                                            alt={'Image'} // Default alt text if none provided
                                                            src={'Source'}
                                                            style={{ width: '100%', height: '100%' }} // Ensures image fills its container
                                                        />
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    {about.studies.display && (
                        <>
                            <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                                {about.studies.title}
                            </Heading>
                            <Flex direction="column" fillWidth gap="l" marginBottom="40">
                                {about.studies.institutions.map((institution, index) => (
                                    <Flex 
                                        key={`${institution.name}-${index}`} 
                                        fillWidth 
                                        gap="4" 
                                        direction="column" 
                                        style={{ marginBottom: '16px' }} // Added spacing between institutions
                                    >
                                        <Text id={institution.name} variant="heading-strong-l">
                                            {institution.name}
                                        </Text>
                                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                                            {institution.description}
                                        </Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    {about.technical.display && (
                        <>
                            <Heading as="h2" id={about.technical.title} variant="display-strong-s" marginBottom="40">
                                {about.technical.title}
                            </Heading>
                            <Flex direction="column" fillWidth gap="l">
                                {about.technical.skills.map((skill, index) => (
                                    <Flex key={`${skill.title}-${index}`} fillWidth>
                                        <Text variant="body-default-s" onBackground="neutral-weak">
                                            {skill.title}
                                        </Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}
