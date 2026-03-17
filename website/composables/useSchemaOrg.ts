export const useLocalBusinessSchema = () => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ['LegalService', 'LocalBusiness'],
          name: 'Kanzlei Schnoor – Rechtsanwalt Philipp Schnoor',
          description: 'Rechtsanwalt und Strafverteidiger in Hamburg. Spezialisiert auf Mietrecht, Strafrecht und Verkehrsrecht.',
          url: 'https://schnoor-rechtsanwalt.de',
          telephone: '+4940XXXXXXXX',
          email: 'kontakt@schnoor-rechtsanwalt.de',
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
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          priceRange: '€€',
          image: 'https://schnoor-rechtsanwalt.de/og-image.jpg',
          areaServed: {
            '@type': 'City',
            name: 'Hamburg',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '47',
            bestRating: '5',
          },
          review: [
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Michael K.' },
              reviewRating: { '@type': 'Rating', ratingValue: '5' },
              reviewBody: 'Herr Schnoor hat sich meines Mietrechtsfalls mit großem Engagement angenommen. Sehr kompetent und immer erreichbar.',
            },
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Sarah L.' },
              reviewRating: { '@type': 'Rating', ratingValue: '5' },
              reviewBody: 'In einer sehr belastenden Situation im Strafrecht hat Herr Schnoor mir sofort geholfen. Absolut empfehlenswert!',
            },
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Thomas W.' },
              reviewRating: { '@type': 'Rating', ratingValue: '5' },
              reviewBody: 'Nach einem Bußgeldbescheid hat Herr Schnoor erfolgreich Einspruch eingelegt. Das Fahrverbot konnte abgewendet werden.',
            },
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Rechtsgebiete',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mietrecht' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strafrecht & Strafverteidigung' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Verkehrsrecht' } },
            ],
          },
        }),
      },
    ],
  })
}
