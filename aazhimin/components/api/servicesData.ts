export type Service = {
  id: number;
  service_name: string;
  slug: string;
  description: string;
  description_big: string;
  image: string;
  cta: string;
  ctalink: string;
  subitems?: string[];
};

export interface ServiceItem {
  id: number;
  name: string;
  description: string;
  description_big: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface Section {
  title: string;
  items: ServiceItem[];
}

// Transform a Service into a ServiceItem using necessary fields with default values.
const transformService = (service: Service): ServiceItem => ({
  id: service.id,
  name: service.service_name,
  description: service.description,
  description_big: service.description_big,
  image: service.image,
  ctaText: "Explore more", // Static value
  ctaLink: `/services/${service.slug}`, // Using slug as the link
});

// Fetch services from the backend and group them into a single section.
export const fetchServices = async (): Promise<Section[]> => {
  try {
    const response = await fetch("https://backend.yazhvin.com/api/design/services");

    if (!response.ok) {
      throw new Error(`Failed to fetch services. Status: ${response.status}`);
    }

    const data: Service[] = await response.json();
    console.log(data);
    if (!Array.isArray(data)) {
      throw new Error("Invalid response format: Expected an array");
    }

    const items: ServiceItem[] = data.map(transformService).sort((a, b) => a.id - b.id);

    return [{ title: "All Services", items }];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};
