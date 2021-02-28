import React from "react";
import { ConfigProvider } from "antd";
import moment from "moment";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import vi_VN from "antd/lib/locale-provider/vi_VN";
import en_US from "antd/lib/locale-provider/en_US";

import vi from "../locales/vi.json";
import en from "../locales/en.json";

moment.locale("vi");
const getLocale = (locale) => ({
  locale,
  messages: locale === "en" ? en : vi,
});

const LocaleComponent = ({ locale, children }) => {
  return (
    <IntlProvider {...getLocale(locale)}>
      <ConfigProvider locale={locale === "en" ? en_US : vi_VN}>
        {children}
      </ConfigProvider>
    </IntlProvider>
  );
};

export default connect(
  (state) => ({
    locale: state.systemReducer.locale,
  }),
  null
)(LocaleComponent);
