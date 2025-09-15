import React from "react";
import { useTranslation } from "react-i18next";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
} from "../../assets/icons";

const Contact: React.FC = () => {
  const { t } = useTranslation("contact");

  const contactInfo = [
    {
      icon: EmailIcon,
      label: t("email"),
      value: "ryderthieu@gmail.com",
      href: "mailto:ryderthieu@gmail.com",
      color: "text-red-500",
    },
    {
      icon: GitHubIcon,
      label: t("github"),
      value: "github.com/ryderthieu",
      href: "https://github.com/ryderthieu",
      color: "text-gray-700 dark:text-gray-300",
    },
    {
      icon: LinkedInIcon,
      label: t("linkedin"),
      value: "linkedin.com/in/huynh-van-thieu",
      href: "https://www.linkedin.com/in/hu%E1%BB%B3nh-v%C4%83n-thi%E1%BB%87u-9a8547248/",
      color: "text-blue-600",
    },
    {
      icon: FacebookIcon,
      label: t("facebook"),
      value: "facebook.com/ryderthieu666",
      href: "https://facebook.com/ryderthieu666",
      color: "text-blue-500",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-cyan-50 via-white to-pink-50 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="pb-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {t("title")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-center">
                    <div
                      className={`inline-flex p-4 rounded-full border-1 border-gray-200 bg-gray-50 shadow-sm dark:border-none dark:bg-gray-700 mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 ">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm break-all truncate"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-2 sm:px-6 py-4 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2025 Huynh Van Thieu. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
