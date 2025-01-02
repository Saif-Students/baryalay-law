import React from "react";
import {
  PakistanArticle,
  v15io2Article,
  doing_a_business_in_pakistan,
  islamic_finance_more_than_window_dressing,
  land_acquisition_in_pakistan,
  the_pakistani_companies_act_2017,
  understanding_sukuk,
} from "../../assets";
import { FaArrowRight } from "react-icons/fa";

function PdfArticles() {
  const articles = [
    { title: "The Asset Management Review", url: PakistanArticle },
    {
      title: "Liquidity management in Islamic financial institutions",
      url: v15io2Article,
    },
    { title: "DOING BUSINESS IN PAKISTAN", url: doing_a_business_in_pakistan },
    {
      title: "ISLAMIC FINANCE MORE THAN WINDOW DRESSING?",
      url: islamic_finance_more_than_window_dressing,
    },
    {
      title:
        "LAND ACQUISITION IN PAKISTAN: A COLONIAL LEGACY AND THE NEED FOR REFORM",
      url: land_acquisition_in_pakistan,
    },
    { title: "THE COMPANIES ACT, 2017", url: the_pakistani_companies_act_2017 },
    {
      title: "ISLAMIC CAPITAL MARKETS UNDERSTANDING SUKUK",
      url: understanding_sukuk,
    },
  ];

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 pt-16 lg:pt-28">
      {/* <h2 className="text-3xl  sm:text-4xl md:text-5xl font-extrabold text-primary-color mb-10">
        Articles
      </h2>
      <p className='text-base sm:text-lg md:text-xl mt-4'>
      This article is published here for information purposes only. The information contained, or the opinions expressed herein do not constitute legal advice and should not be acted upon without seeking specific legal advice. We reserve the right to change the opinions and views expressed in this publication without prior notice and shall have no obligation to inform you. Should you require legal advice on any matter contained in this publication, please contact the author.
      </p> */}
      <ul className="space-y-6">
        {articles.map((article, index) => (
          <li key={index} className="flex items-center space-x-3">
            {/* Consistent arrow size */}
            <FaArrowRight className="text-primary-color flex-shrink-0 w-6 h-6" />
            <a
              href={article.url}
              rel="noopener noreferrer"
              className="text-lg sm:text-xl uppercase font-semibold text-gray-800 hover:text-primary-color transition duration-300 underline-offset-4 hover:underline leading-tight"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 leading-relaxed mt-20">
        The articles published on this website are for general information only
        and may not be relied on without seeking specific legal advice. We
        reserve the right to change the opinions and views expressed in these
        publications without prior notice and shall have no obligation to inform
        you. If you require legal guidance on the topics discussed in these
        publications, please contact us on: 
        &nbsp;  <a
          href="mailto:haroon@baryalay.law"
          className="text-blue-500 underline"
        >
          haroon@baryalay.law
        </a>
        .
      </p>
    </div>
  );
}

export default PdfArticles;
