import { Chance } from "chance";
import { random } from "lodash";
import { sub } from "date-fns";
import mock from "../mockAdapter";

// Main Images
import blog1 from "/images/blog/blog1.png";
import blog2 from "/images/blog/blog2.png";
import blog3 from "/images/blog/blog3.png";
import blog4 from "/images/projects/project3.webp";

// Detail images
import blog11 from "/images/blog/blog11.png";
import blog21 from "/images/blog/blog21.png";
import blog31 from "/images/projects/details/pd-43.webp";
import blog41 from "/images/projects/details/pd-61.webp";

import { uniqueId } from "lodash";

import type { BlogTypes } from "@/types/blog/BlogTypes";

const chance = new Chance();

const BlogGridData: BlogTypes[] = [
  {
    id: chance.integer({ min: 1, max: 2000 }),
    blog_image: blog1,
    blog_title: "A campaign that connects",
    blog_date: "Dec 24, 2025",
    blog_inner_image: blog11,
    blog_description:
      "<p>A Aveiro Smart Connected Spaces (Aveiro Test Bed) promove a experimentação de soluções em comunicações, sensorização e automação, aproximando PMEs e startups de ambientes reais para testes e pilotos.</p> <p>O Test Bed disponibiliza infraestruturas físicas e digitais que suportam a medição, análise e iteração rápida de protótipos, reduzindo o risco de entrada no mercado.</p>",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    blog_image: blog2,
    blog_title: "An breaking boundaries our latest brand redesign",
    blog_date: "Jan 26, 2025",
    blog_inner_image: blog21,
    blog_description:
      "<h4>Aveiro Test Bed — O que há de novo?</h4> <p>O projeto disponibiliza novas áreas de testes em Aveiro, Ílhavo e Porto de Aveiro, com conectividade reforçada e capacidades de sensorização para pilotos em aquacultura, praias e ambientes urbanos.</p> <p>Objetivo: Acelerar o desenvolvimento de produtos e serviços por PMEs e startups, reduzindo o risco comercial e fomentando a criação de soluções de alto valor acrescentado.</p>",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    blog_image: blog3,
    blog_title: "Recognized for design",
    blog_date: "May 28, 2025",
    blog_inner_image: blog31,
  blog_description:"<p>Aveiro Smart Connected Spaces apoia estudos de caso e publicações sobre pilotos realizados no Test Bed: medição de cobertura, latência e consumo energético, validação de sensores em aquacultura, e demonstrações de automação em ambiente portuário.</p> <p>Publicamos guias práticos e resultados de experimentos para ajudar empresas e investigadores a replicar e escalar soluções.</p>",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    blog_image: blog4,
    blog_title: "The Modern Lens Perspectives on Culture & Trends",
    blog_date: "June 11, 2025",
    blog_inner_image: blog41,
    blog_description:
      "<h4>1. Cultural Trends Blog by MIDiA Research</h4> <p>This blog delves into various cultural phenomena, analyzing how they influence industries such as music, media, and technology. It offers data-driven insights into shifting consumer behaviors and emerging trends.</p> <h4>2. Widening Our Lens: Considering Culture by Karl Ostroski</h4> <p>Published on Medium, this article discusses the importance of broadening our cultural perspectives. Ostroski emphasizes understanding diverse cultural backgrounds to foster empathy and innovation.</p> <h4>3. Cultural Lens: How Our Environment Shapes Our Perspectives by Exceptional Futures</h4> <p>This piece explores the concept of the cultural lens, examining how our surroundings and upbringing influence our worldview. It encourages readers to reflect on their biases and consider alternative viewpoints.</p>",
  },
];

mock.onGet("/api/data/blog/grid").reply(() => {
  return [200, BlogGridData];
});

// ----------------------------------------------------------------------
mock.onPost("/api/data/blog/post").reply((config: string | any) => {
  try {
    const { title } = JSON.parse(config.data);

    const paramCase = (t: string) =>
      t
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

    const post = BlogGridData.find(
      (_post: BlogTypes | string | any) => paramCase(_post.blog_title) === title
    );

    if (!post) {
      return [404, { message: "Post not found" }];
    }

    return [200, { post }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});
