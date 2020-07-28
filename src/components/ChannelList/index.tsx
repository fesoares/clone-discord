import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="chat-q" />
      <ChannelButton channelName="chat-w" />
      <ChannelButton channelName="chat-e" />
      <ChannelButton channelName="chat-r" />
    </Container>
  );
};

export default ChannelList;