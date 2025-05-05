import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero10 } from "components/blocks/hero";
import { Facts7 } from "components/blocks/facts";
import { About11 } from "components/blocks/about";
import { Footer12 } from "components/blocks/footer";
import { Contact5 } from "components/blocks/contact";
import { Clients1 } from "components/blocks/clients";
import { Tiles8, Tiles9 } from "components/elements/tiles";
import { Services13, Services6 } from "components/blocks/services";
import { TestimonialCard4 } from "components/reuseable/testimonial-cards";
import NextLink from "components/reuseable/links/NextLink";

import Blog from "components/blogs/Blog"
import BlogBanner from "components/blogs/BlogBanner"

import Topbar from "components/elements/Topbar";

export default function Demo10() {
  const blogList1 = [
    {
      id: 1,
      // category: 'Coding',
      // date: '14 Apr 2022',
      // image: '/img/photos/b4.jpg',
      image: '/img/photos/case-studies-1.jpg',
      title: 'Ligula tristique quis risus'
    },
    {
      id: 2,
      category: 'Workspace',
      date: '29 Mar 2022',
      image: '/img/photos/case-studies-2.jpg',
      title: 'ullam id dolor elit id nibh'
    },
    {
      id: 3,
      category: 'Meeting',
      date: '26 Feb 2022',
      image: '/img/photos/case-studies-3.jpg',
      title: 'ullam id dolor elit id nibh'
    },
    {
      id: 4,
      category: 'Business Tips',
      date: '7 Jan 2022',
      image: '/img/photos/case-studies-4.jpg',
      title: 'Morbi leo risus porta eget'
    }
  ];
  return (
    <Fragment>
      {/* ========== topbar ========== */}
     
      {/* ========== header ========== */}
      <header className="wrapper bg-light">
        <Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />} />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
      
        <BlogBanner title="Case Studies"/>


        {/* ========== services section ========== */}
        {/* <MediaList /> */}

        <Blog title="Case Studies" subtitle="Tangible Results. Meaningful Change.Explore how Eternal Renewables is powering change. Our case studies showcase real-world success stories across residential, commercial, and industrial sectors." blogList1={blogList1}/>


    
      </main>

      {/* ========== footer section ========== */}
      <div className="page-frame bg-pale-primary">
             {/* ========== footer section ========== */}
             <Footer12 />
           </div>
    </Fragment>
  );
}
