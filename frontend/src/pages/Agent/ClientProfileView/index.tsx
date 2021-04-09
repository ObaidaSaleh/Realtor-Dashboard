import React, { useCallback, useEffect, useState } from 'react';
import {
  PermNavBar,
  TransparentAppBar,
  ClientProfile,
  ProjectList,
} from '../../../components';

import { RouteComponentProps } from 'react-router';

import { getClient, editClient } from '../../../actions/client';

import { useUserContext } from '../../../contexts/UserContext';
import { useHistory, useLocation } from 'react-router-dom';

const ClientProfilePage: React.FC<
  RouteComponentProps<{ clientId: string }>
> = ({ match }) => {
  const [page, setPage] = useState<string>('profile');

  const [client, setClient] = useState<any>({
    name: 'Not available',
    phone: 'Not available',
    email: 'Not available',
    address: 'Not available',
  });

  const { user } = useUserContext();
  const history = useHistory();

  const location: {
    state: { clientId: string; from: string };
  } = useLocation();

  useEffect(() => {
    getClient(match.params.clientId, setClient, user);
  }, [match.params.clientId, user]);

  useEffect(() => {
    if (location.state && location.state.from) {
      setPage('projects');
    }
  }, [history, location.state]);

  const handlePageChange = useCallback(
    (newPage: string) => {
      setPage(newPage);
    },
    [setPage]
  );

  return (
    <>
      <PermNavBar title={client.name} />
      <TransparentAppBar page={page} handlePageChange={handlePageChange} />
      <ClientProfile
        page={page}
        setClient={setClient}
        client={client}
        clientId={match.params.clientId}
      />
      {page === 'projects' ? (
        <ProjectList clientId={match.params.clientId} title={client.name} />
      ) : null}
    </>
  );
};

export default ClientProfilePage;
