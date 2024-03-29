import React from 'react';
import styled from 'styled-components/macro';
import useTranslation from 'next-translate/useTranslation';

import { Heading2 as StoryTitle, Heading4, Text } from '../general/Headings';

import { primaryColor } from '../../constants/websiteColors';

const StoryContainer = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 0 calc(100vw * 245 / 1920);
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 64px;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    & > *:not(:last-child) {
      margin-bottom: 0px;
    }
  }
`;

const StoryWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  & > * {
    text-align: center;
  }
  @media (min-width: 1200px) {
    align-items: flex-end;
    & > * {
      text-align: right;
    }
  }
`;

const StorySubtitle = styled(Heading4)`
  margin-bottom: 32px;
`;

const StoryDescription = styled(Text)`
  width: 100%;
  margin-bottom: 64px;
  @media (min-width: 992px) {
    width: 50vw;
  }
  @media (min-width: 1200px) {
    width: calc(100vw / 2 - 40px - 100vw * 245 / 1920);
  }
`;

function Story() {
  const { t } = useTranslation();
  return (
    <StoryContainer>
      <StoryWrap>
        <StoryTitle>{t('common:Who are we?')}</StoryTitle>
        <StorySubtitle color={primaryColor}>
          {t('common:Traditions combined with innovation')}
        </StorySubtitle>
        <StoryDescription>
          {t('common:People with a passion for barbering and Polish history')}
        </StoryDescription>
      </StoryWrap>
    </StoryContainer>
  );
}

export default Story;
