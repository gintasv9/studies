import React from 'react';
import { Alert, Container, Grid, Spinner, ThemeUICSSObject } from 'theme-ui';
import StudiesToolbar from './StudiesToolbar';
import StudyCard from './StudyCard';
import { useStudies } from './useStudies';

const loadingStyles: ThemeUICSSObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
};

const gridContainerStyles: ThemeUICSSObject = {
  display: 'block'
};

const Studies: React.FC = () => {
  const {
    studies,
    loading,
    error,
    filter,
    sortBy,
    changeFilter,
    changeSortBy
  } = useStudies();

  const containerStyles = loading ? loadingStyles : gridContainerStyles;

  return (
    <>
      <StudiesToolbar
        filter={filter}
        sortBy={sortBy}
        onChangeFilter={changeFilter}
        onChangeSortBy={changeSortBy}
      />

      <Container p={4} sx={{ ...containerStyles, paddingTop: 6 }}>
        {loading&& <Spinner />}
        {error && <Alert variant="error">Error handled!</Alert>}
        {studies.length > 0 && (
          <Grid gap={4} width={240} sx={{ width: '100%' }}>
            {studies.map(x => <StudyCard key={x.id} study={x} />)}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Studies;