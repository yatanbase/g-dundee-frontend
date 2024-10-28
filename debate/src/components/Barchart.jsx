import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../Barchart.css';

const Barchart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    d3.select(svgRef.current).selectAll('*').remove();

    const margin = { top: 20, right: 30, bottom: 60, left: 80 },
      width = 900 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map(d => `${d.Panellist} (${d.Topic})`))
      .range([0, width])
      .padding(0.3);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.Sentiment_Intensity) * 1.2])
      .range([height, 0]);

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .attr('text-anchor', 'end')
      .attr('class', 'axis-label');

    svg.append('g').call(d3.axisLeft(y)).selectAll('text').attr('class', 'axis-label');

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(`${d.Panellist} (${d.Topic})`))
      .attr('y', height)
      .attr('width', x.bandwidth())
      .attr('height', 0)
      .transition()
      .duration(1200)
      .delay((d, i) => i * 100)
      .ease(d3.easeElasticOut)
      .attr('y', d => y(d.Sentiment_Intensity))
      .attr('height', d => height - y(d.Sentiment_Intensity))
      .style('transform', 'translateZ(30px) scaleY(1.05)')
      .style('transform-origin', 'center bottom');

    svg
      .selectAll('.bar')
      .on('mouseover', function () {
        d3.select(this)
          .style('filter', 'drop-shadow(0px 0px 30px rgba(255, 140, 0, 0.8))')
          .transition()
          .duration(200)
          .style('transform', 'translateZ(50px) scale(1.1)')
          .style('fill', 'url(#hover-gradient)');
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(200)
          .style('filter', 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.7))')
          .style('transform', 'translateZ(30px) scale(1)')
          .style('fill', 'url(#gradient)');
      });

    svg
      .selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', d => x(`${d.Panellist} (${d.Topic})`) + x.bandwidth() / 2)
      .attr('y', d => y(d.Sentiment_Intensity) - 15)
      .attr('text-anchor', 'middle')
      .attr('opacity', 0)
      .transition()
      .delay(1400)
      .duration(600)
      .attr('opacity', 1)
      .text(d => d.Sentiment_Intensity);

    // Gradient Definitions
    svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')
      .html(`
        <stop offset="0%" style="stop-color: #4B0082; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: #FF4500; stop-opacity: 1" />
      `);

    svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'hover-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')
      .html(`
        <stop offset="0%" style="stop-color: #FFD700; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: #DC143C; stop-opacity: 1" />
      `);
  }, [data]);

  return (
    <div className="barchart-container">
      <h2 className="barchart-header">Sentiment Intensity by Panellist and Topic</h2>
      <svg ref={svgRef} className="barchart-svg"></svg>
    </div>
  );
};

export default Barchart;
