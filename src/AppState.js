/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import React from 'react';

const AppStateDefault = {
    account: false,
    setAppState: () => {}
};

const AppStateContext = React.createContext();

export default AppStateContext;
export {AppStateDefault}