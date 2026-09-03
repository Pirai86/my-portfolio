import { ImageResponse } from "next/og";
import { getProjectBySlug, portfolio_gridList } from "@/app/data/data";

export const alt = "Project case study by Piraisudan R";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return portfolio_gridList.map((project) => ({ slug: project.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#d97706",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          {project?.company ?? "Portfolio"}
        </div>
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {project?.title ?? "Project"}
        </div>
        <div
          style={{
            display: "flex",
            color: "#9ca3af",
            fontSize: 24,
          }}
        >
          Piraisudan R · Full Stack Engineer
        </div>
      </div>
    ),
    { ...size },
  );
}
