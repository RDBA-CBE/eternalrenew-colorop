import { CSSProperties } from "react";
import NextLink from "components/reuseable/links/NextLink";
import FigureImage from "components/reuseable/FigureImage";

// ==============================================================================
interface ProjectCard2Props {
  link: string;
  title: string;
  color?: string;
  category: string;
  description: string;
  imageClassName: string;
  cardStyle?: CSSProperties;
  detailsStyle?: CSSProperties;
  image: { width: number; height: number; url: string };
}
// ==============================================================================

export default function ProjectCard2(props: ProjectCard2Props) {
  const { link, title, category, description, image, imageClassName, cardStyle, detailsStyle, color } = props;

  const catColor = color ? `text-${color}` : "text-purple";
  const linkColor = color ? `link-${color}` : "link-purple";

  return (
    <div className="project item mt-14">
      <div className="row">
        <FigureImage width={image.width} height={image.height} src={image.url} className={imageClassName} />

        <div className="project-details d-flex justify-content-center flex-column" style={detailsStyle}>
          <div className="card shadow rellax" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" style={cardStyle}>
            <div className="card-body">
              <div className="post-header">
                <div className={`post-category text-line ${catColor} mb-3`}>{category}</div>
                <h2 className="post-title mb-3">{title}</h2>
              </div>

              <div className="post-content">
                <p>{description}</p>
                <NextLink title="See Project" href={link} className={`more hover ${linkColor}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
