import * as React from 'react';

import { isRouteErrorResponse } from 'react-router';
import { useNavigate } from 'react-router';
import { useRouteError } from 'react-router';

export function Boundary() {
  const navigate = useNavigate();
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 404;

  React.useEffect(() => {
    if (!error) return;

    const code = status;
    const params = {
      state: { code },
      viewTransition: true,
      replace: true,
    };

    if (code === 401 || code === 403) {
      window.location.replace('/auth');
    } else {
      navigate('/error', params);
    }
  }, [error]);

  return null;
}
