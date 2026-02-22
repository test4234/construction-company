import { buildMeta } from "@/lib/seo";
import siteConfig from "@/data/siteConfig";

export async function generateMetadata() {
  return buildMeta({
    title: "Construction Terminologies",
    description:
      "Understanding petrol pump construction and fuel infrastructure terminologies.",
    path: "/terminologies",
  });
}

export default function TerminologiesPage() {
  const terms = [
    {
      title: "Forecourt",
      description:
        "The paved area of a fuel station where vehicles access fuel dispensers.",
    },
    {
      title: "Canopy",
      description:
        "The overhead structure that shelters fuel dispensers and vehicles.",
    },
    {
      title: "Underground Storage Tank (UST)",
      description:
        "Large storage tanks installed below ground for storing fuel safely.",
    },
    {
      title: "Fuel Dispenser",
      description:
        "The machine used to pump fuel into vehicles.",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10">
          Construction Terminologies
        </h1>

        <div className="space-y-10">
          {terms.map((term, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-2">
                {term.title}
              </h2>
              <p className="text-gray-700">
                {term.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}