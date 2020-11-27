import React from 'react';
import {
  Badge,
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Text,
  ThemeUICSSObject
} from 'theme-ui';
import { Study } from './model';

const getImageStyles = (url: string, id: string): ThemeUICSSObject => ({
  height: 300,
  width: 200,
  margin: '0 auto',
  backgroundImage: `url('${url}?random=${id}}')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
});

const flexContainerStyles: ThemeUICSSObject = {
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

interface Props {
  study: Study;
}

const StudyCard: React.FC<Props> = ({ study }) => {
  return (
    <Card variant="hoverable">
      <Flex sx={flexContainerStyles}>
        <Container>
          <Box sx={getImageStyles(study.studyThumbnail, study.id)} />
          <Heading mt={2} mb={2} sx={{ textAlign: 'center' }}>
            {study.name}
          </Heading>
        </Container>

        <Container>
          <Text>
            {`Created on: ${new Date(study.createdAt).toLocaleDateString('lt-LT')}`}
          </Text>
          <Text>
            {`Modified on: ${new Date(study.updatedAt).toLocaleDateString('lt-LT')}`}
          </Text>
          <Flex mt={2} sx={{ justifyContent: 'space-between' }}>
            <Text>{`Images: ${study.imagesCount}`}</Text>
            <Flex sx={{ alignItems: 'center' }}>
              <Badge variant={study.statusKey}>{study.statusKey}</Badge>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Card>
  );
};

export default StudyCard;