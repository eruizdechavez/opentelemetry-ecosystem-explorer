/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { OtelLogo } from "@/components/icons/otel-logo";

function LanguageSwitcher() {
  const { i18n, t } = useTranslation("layout");
  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="border-border/40 bg-background text-muted-foreground hover:text-foreground cursor-pointer rounded border px-2 py-1 text-xs transition-colors"
      aria-label={t("header.languageSwitcher")}
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}

export function Header() {
  const { t } = useTranslation("layout");
  return (
    <header className="border-border/30 bg-background/95 fixed top-0 right-0 left-0 z-50 h-16 border-b backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <OtelLogo className="text-primary h-6 w-6" />
          <span className="text-foreground font-semibold">{t("header.title")}</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8">
            <Link
              to="/java-agent"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {t("header.nav.javaAgent")}
            </Link>
            <Link
              to="/collector"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {t("header.nav.collector")}
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {t("header.nav.about")}
            </Link>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
