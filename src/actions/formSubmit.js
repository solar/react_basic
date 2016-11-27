import { SUFFIX } from 'actions/helper';

export const FORM_SUBMIT = 'app/actions/FORM_SUBMIT';

export default type => (values, dispatch) => new Promise((resolve, reject) =>
    dispatch({
      type: FORM_SUBMIT,
      payload: {
        action: type,
        successAction: `${type}_${SUFFIX.success}`,
        failureAction: `${type}_${SUFFIX.failure}`,
        values,
        resolve,
        reject,
      },
    })
);
