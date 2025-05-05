// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";


export default function MediaNavItem() {
    const mediaNavigation = [
        { id: 1, url: "/events", title: "Events" },
        { id: 2, url: "/testimonials", title: "Testimonials" },
        { id: 3, url: "/casestudies", title: "Case Studies" },
        { id: 4, url: "/blogs", title: "Blogs" },
      ];

      const mediaMblNavigation = [
        { id: 1, url: "/media", title: "Overview" },
        { id: 2, url: "/events", title: "Events" },
        { id: 3, url: "/testimonials", title: "Testimonials" },
        { id: 4, url: "/casestudies", title: "Case Studies" },
        { id: 5, url: "/blogs", title: "Blogs" },
      ];
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink title="Media" className="nav-link text-blue dropdown-toggle d-block d-lg-none" />
      <a href="media"  className="nav-link text-blue dropdown-toggle  d-none d-lg-block" >
           Media
              </a>

      <ul className="dropdown-menu d-none d-lg-block">
        {mediaNavigation.map(({ id, url, title }) => {
          
          return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />;
        })}
      </ul>

      <ul className="dropdown-menu d-block d-lg-none">
        {mediaMblNavigation.map(({ id, url, title }) => {
          
          return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />;
        })}
      </ul>
    </li>
  );
}
