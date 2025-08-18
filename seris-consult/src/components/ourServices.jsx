import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  AssignmentTurnedIn,
  BarChart,
  BusinessCenter,
  Calculate,
  Timeline,
  Verified,
  People,
  Event,
  School,
  Code,
  Memory,
  AllInclusive
} from "@mui/icons-material";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Project Management",
      description: "Professional project planning, execution, and delivery support.",
      icon: <AssignmentTurnedIn sx={{ fontSize: 40, color: "#1F6E3F" }} />,
      link: "/services/project-management"
    },
    {
      title: "Strategic Plans",
      description: "Developing effective long-term strategies for organizational growth.",
      icon: <BarChart sx={{ fontSize: 40, color: "#1F6E3F" }} />,
      link: "/services/strategic-plans"
    },
    {
      title: "Business Plans",
      description: "Crafting actionable business blueprints for success.",
      icon: <BusinessCenter sx={{ fontSize: 40, color: "#1F6E3F" }} />,
      link: "/services/business-plans"
    },
    {
      title: "Budgeting",
      description: "Efficient financial planning for optimal resource use.",
      icon: <Calculate sx={{ fontSize: 40, color: "#1F6E3F" }} />,
      link: "/services/budgeting"
    },
    {
      title: "Monitoring & Evaluation",
      description: "Tracking performance and ensuring continuous improvement.",
      icon: <Timeline sx={{ fontSize: 40, color: "#1F6E3F" }} />,
      link: "/services/monitoring-evaluation"
    },
    {
      title: "Quality Management Systems",
      description: "Implementing frameworks to maintain high standards.",
      icon: <Verified sx={{ fontSize: 40, color: "#1F6E3F" }} />,
      link: "/services/quality-management"
    },
    {
      title: "Human Resource Management",
      description: "Optimizing employee engagement and productivity.",
      icon: <People sx={{ fontSize: 40, color: "#1F6E3F" }} />,
      link: "/services/human-resource"
    },
    {
      title: "Events Management",
      description: "Planning and executing seamless events.",
      icon: <Event sx={{ fontSize: 40, color: "#1F6E3F" }} />,
      link: "/services/events-management"
    },
    {
      title: "Training Programs",
      description: "Providing skill-building and development programs.",
      icon: <School sx={{ fontSize: 40, color: "#1F6E3F" }} />,
      link: "/services/training-programs"
    },
    
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Typography
        variant="h4"
        style={{ fontWeight: "bold", marginBottom: "30px", color: "#1F6E3F" }}
      >
        Our Services
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center"
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            onClick={() => navigate(service.link)}
            style={{
              flex: "0 0 calc(33.33% - 15px)",
              maxWidth: "calc(33.33% - 15px)",
              minWidth: "300px",
              border: "2px solid #1F6E3F",
              borderRadius: "8px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              padding: "15px",
              boxSizing: "border-box"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <CardContent style={{ textAlign: "center", padding: "10px" }}>
              <div style={{ marginBottom: "15px" }}>{service.icon}</div>
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "black", fontSize: "14px" }}
              >
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}