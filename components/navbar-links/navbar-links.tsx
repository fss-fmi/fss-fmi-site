import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { NavbarLinksDesktop } from './components/navbar-links-desktop';
import { NavbarLinksMobile } from './components/navbar-links-mobile';

interface NavbarLinksProps {
  variant: 'desktop' | 'mobile';
  className: string;
}

export function NavbarLinks({ className, variant }: NavbarLinksProps) {
  const locale = useLocale();
  const t = useTranslations('navbar-links');

  const links = [
    {
      title: t('about.name'),
      href: `/${locale}/about`,
      links: [
        {
          isFeatured: true,
          title: t('about.name'),
          description: t('about.description'),
          href: `/${locale}/about`,
        },
        {
          isFeatured: false,
          title: t('about.join.name'),
          description: t('about.join.description'),
          href: `/${locale}/about/join`,
        },
        {
          isFeatured: false,
          title: t('about.commissions.name'),
          description: t('about.commissions.description'),
          href: `/${locale}/about/commissions`,
        },
        {
          isFeatured: false,
          title: t('about.regulations-and-protocols.name'),
          description: t('about.regulations-and-protocols.description'),
          href: `/${locale}/about/regulations-and-protocols`,
        },
        {
          isFeatured: false,
          title: t('about.members.name'),
          description: t('about.members.description'),
          href: `/${locale}/about/members`,
        },
      ],
    },
    {
      title: t('news'),
      href: `/${locale}/news`,
    },
    {
      title: t('events'),
      href: `/${locale}/events`,
    },
    {
      title: t('resources.name'),
      href: `/${locale}/resources`,
      links: [
        {
          isFeatured: true,
          title: t('resources.name'),
          description: t('resources.description'),
          href: `/${locale}/resources`,
        },
        {
          isFeatured: false,
          title: t('resources.candidates.name'),
          description: t('resources.candidates.description'),
          href: `/${locale}/resources/candidates`,
        },
        {
          isFeatured: false,
          title: t('resources.bachelors.name'),
          description: t('resources.bachelors.description'),
          href: `/${locale}/resources/bachelors`,
        },
        {
          isFeatured: false,
          title: t('resources.masters.name'),
          description: t('resources.masters.description'),
          href: `/${locale}/resources/masters`,
        },
        {
          isFeatured: false,
          title: t('resources.doctorates.name'),
          description: t('resources.doctorates.description'),
          href: `/${locale}/resources/doctorates`,
        },
        {
          isFeatured: false,
          title: t('resources.administrative-documents.name'),
          description: t('resources.administrative-documents.description'),
          href: `/${locale}/resources/administrative-documents`,
        },
        {
          isFeatured: false,
          title: t('resources.carrier-center.name'),
          description: t('resources.carrier-center.description'),
          href: `/${locale}/resources/carrier-center`,
        },
        {
          isFeatured: false,
          title: t('resources.student-rights-and-obligations.name'),
          description: t(
            'resources.student-rights-and-obligations.description',
          ),
          href: `/${locale}/resources/student-rights-and-obligations`,
        },
        {
          isFeatured: false,
          title: t('resources.faq.name'),
          description: t('resources.faq.description'),
          href: `/${locale}/resources/faq`,
        },
      ],
    },
    {
      title: t('misc.name'),
      href: `/${locale}/misc`,
    },
    {
      title: t('contact.name'),
      href: `/${locale}/contact`,
    },
  ];

  if (variant === 'desktop') {
    return <NavbarLinksDesktop className={className} links={links} />;
  }

  if (variant === 'mobile') {
    return <NavbarLinksMobile className={className} links={links} />;
  }
}
