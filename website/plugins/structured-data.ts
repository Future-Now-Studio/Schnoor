export default defineNuxtPlugin(() => {
  // Global LocalBusiness + Attorney schema (on every page)
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Attorney',
              '@id': 'https://schnoor-rechtsanwalt.de/#attorney',
              name: 'Philipp Schnoor',
              jobTitle: 'Rechtsanwalt & Strafverteidiger',
              url: 'https://schnoor-rechtsanwalt.de',
              image: 'https://schnoor-rechtsanwalt.de/og-image.jpg',
              telephone: '+4915730871236',
              email: 'info@schnoorrechtsanwalt.de',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Papenreye 61',
                addressLocality: 'Hamburg',
                postalCode: '22453',
                addressCountry: 'DE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 53.5511,
                longitude: 9.9937,
              },
              areaServed: {
                '@type': 'City',
                name: 'Hamburg',
              },
              priceRange: '€€',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
              sameAs: [],
            },
            {
              '@type': 'LegalService',
              '@id': 'https://schnoor-rechtsanwalt.de/#legalservice',
              name: 'Kanzlei Schnoor – Rechtsanwalt Hamburg',
              provider: { '@id': 'https://schnoor-rechtsanwalt.de/#attorney' },
              serviceType: ['Mietrecht', 'Strafrecht', 'Verkehrsrecht'],
              areaServed: {
                '@type': 'City',
                name: 'Hamburg',
              },
              url: 'https://schnoor-rechtsanwalt.de',
            },
          ],
        }),
      },
    ],
  })
})
