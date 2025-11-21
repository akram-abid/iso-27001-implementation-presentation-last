import React, { useState, useEffect } from 'react'
import './App.css'

const ISMSCertificationPresentation = () => {
  const [currentPhase, setCurrentPhase] = useState(9)
  const [currentStep, setCurrentStep] = useState(0)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') nextStep()
      else if (event.key === 'ArrowLeft') prevStep()
      else if (event.key >= 9 && event.key <= 12) {
        setCurrentPhase(parseInt(event.key))
        setCurrentStep(0)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPhase, currentStep])

  const riskTreatmentOptions = [
    {
      option: "Reduce",
      icon: "📉",
      description: "Implement controls to lower impact/likelihood",
      examples: ["MFA Implementation", "Security Training", "Backup Systems"],
      color: "#e74c3c"
    },
    {
      option: "Accept",
      icon: "✅", 
      description: "Acknowledge risk when cost of treatment exceeds benefit",
      examples: ["Low-impact risks", "Rare occurrences", "Budget constraints"],
      color: "#27ae60"
    },
    {
      option: "Avoid",
      icon: "🚫",
      description: "Eliminate risk by stopping the activity",
      examples: ["Discontinue risky services", "Block certain features", "Change processes"],
      color: "#f39c12"
    },
    {
      option: "Transfer",
      icon: "🔄",
      description: "Share risk with third parties",
      examples: ["Cyber Insurance", "Supplier contracts", "Outsourcing"],
      color: "#3498db"
    }
  ]

  const riskDecisions = [
    {
      risk: "Ransomware Attack",
      treatment: "Reduce",
      rationale: "Critical patient data protection requires proactive controls",
      actions: ["MFA deployment", "Advanced antivirus", "Backup verification"],
      investment: "450,000 DZD",
      reduction: "600K → 150K DZD ALE"
    },
    {
      risk: "Physical Device Theft", 
      treatment: "Accept",
      rationale: "Low probability with existing physical security",
      actions: ["Enhanced monitoring", "Asset tracking", "Staff awareness"],
      investment: "25,000 DZD",
      reduction: "25K DZD ALE accepted"
    },
    {
      risk: "Legacy System Failure",
      treatment: "Avoid", 
      rationale: "Migrate to modern systems instead of patching old ones",
      actions: ["System replacement", "Cloud migration", "Architecture update"],
      investment: "800,000 DZD",
      reduction: "Eliminate 400K DZD risk"
    },
    {
      risk: "Supplier Data Breach",
      treatment: "Transfer",
      rationale: "Share responsibility through contracts and insurance",
      actions: ["Security clauses", "Cyber insurance", "Liability agreements"],
      investment: "120,000 DZD",
      reduction: "Transfer 300K DZD exposure"
    }
  ]

  const phase9Steps = [
    {
      title: "Strategic Risk Treatment",
      subtitle: "Making Smart Security Investment Decisions",
      content: "We analyzed each risk against four treatment options to maximize security ROI while maintaining operational efficiency.",
      type: "risk-intro",
      visual: "🎯"
    },
    {
      title: "Risk Treatment Framework",
      content: "Four strategic options for managing information security risks:",
      type: "treatment-framework",
      options: riskTreatmentOptions
    },
    {
      title: "Risk Treatment Decisions",
      content: "Strategic choices for our highest-impact risks:",
      type: "risk-decisions",
      decisions: riskDecisions
    },
    {
      title: "Security Control Selection",
      content: "65 controls chosen based on risk treatment strategy:",
      type: "controls-breakdown",
      stats: {
        preventive: 42,
        detective: 15,
        corrective: 8,
        budget: "1.85M DZD"
      }
    },
    {
      title: "Implementation Roadmap",
      content: "Phased approach for maximum impact:",
      type: "roadmap",
      phases: [
        { phase: "Immediate", focus: "Critical controls", timeline: "30 days", risks: "Ransomware, Data Breach" },
        { phase: "Short-term", focus: "High-impact controls", timeline: "90 days", risks: "System failure, Access issues" },
        { phase: "Medium-term", focus: "Process improvements", timeline: "180 days", risks: "Supplier, Compliance" }
      ]
    }
  ]

  const phase10Steps = [
    {
      title: "Continuous Security Monitoring",
      subtitle: "Real-time Visibility into Security Posture",
      content: "Implemented comprehensive monitoring to track security effectiveness and detect issues before they impact operations.",
      type: "monitoring-intro",
      visual: "📊"
    },
    {
      title: "Security Metrics Dashboard",
      content: "Key indicators for real-time security health monitoring:",
      type: "live-metrics",
      metrics: [
        { name: "Threat Detection", current: 94, target: 95, unit: "%", trend: "up" },
        { name: "Response Time", current: 2.3, target: 2.0, unit: "hours", trend: "down" },
        { name: "Patch Compliance", current: 88, target: 95, unit: "%", trend: "up" },
        { name: "User Awareness", current: 79, target: 85, unit: "%", trend: "up" }
      ]
    },
    {
      title: "Automated Control Testing",
      content: "Continuous validation of security controls:",
      type: "control-testing",
      tests: [
        { control: "Backup Integrity", frequency: "Daily", success: 92, status: "Needs Attention" },
        { control: "Access Reviews", frequency: "Weekly", success: 100, status: "Excellent" },
        { control: "Vulnerability Scans", frequency: "Continuous", success: 85, status: "Good" },
        { control: "Incident Response", frequency: "Monthly", success: 78, status: "Improving" }
      ]
    },
    {
      title: "Security Performance Trends",
      content: "Quarter-over-quarter security improvement:",
      type: "performance-trends",
      trends: [
        { metric: "Security Incidents", q3: 12, q4: 3, change: -75 },
        { metric: "Phishing Success", q3: 42, q4: 18, change: -57 },
        { metric: "System Availability", q3: 99.1, q4: 99.8, change: +0.7 },
        { metric: "Training Completion", q3: 45, q4: 100, change: +122 }
      ]
    }
  ]

  const phase11Steps = [
    {
      title: "Learning from Security Events",
      subtitle: "Turning Incidents into Improvements",
      content: "Established systematic processes to analyze security events and drive continuous enhancement.",
      type: "improvement-intro",
      visual: "🔄"
    },
    {
      title: "Root Cause Analysis Framework",
      content: "Structured approach to understanding security issues:",
      type: "rca-framework",
      methods: [
        { method: "5 Whys", use: "Simple incidents", example: "Why was MFA not implemented?" },
        { method: "Fishbone Diagram", use: "Complex issues", example: "Multiple contributing factors" },
        { method: "Fault Tree Analysis", use: "Technical failures", example: "System outage causes" }
      ]
    },
    {
      title: "Improvement Initiatives",
      content: "Key enhancements driven by security analysis:",
      type: "improvement-initiatives",
      initiatives: [
        { area: "Incident Response", improvement: "Automated alerting", impact: "60% faster response" },
        { area: "Access Management", improvement: "Role-based automation", impact: "80% time savings" },
        { area: "Backup Procedures", improvement: "Automated testing", impact: "100% reliability" },
        { area: "Staff Training", improvement: "Personalized modules", impact: "45% better retention" }
      ]
    },
    {
      title: "Security Maturity Growth",
      content: "Evolution of our security capabilities:",
      type: "maturity-growth",
      stages: [
        { stage: "Initial", capabilities: "Basic controls", maturity: 35 },
        { stage: "Developing", capabilities: "Structured processes", maturity: 65 },
        { stage: "Defined", capabilities: "Proactive measures", maturity: 82 },
        { stage: "Optimizing", capabilities: "Continuous improvement", maturity: 94 }
      ]
    }
  ]

  const phase12Steps = [
    {
      title: "Certification Excellence",
      subtitle: "Demonstrating Security Leadership",
      content: "Achieved ISO 27001 certification through rigorous preparation and outstanding security practices.",
      type: "cert-intro",
      visual: "🏆"
    },
    {
      title: "Audit Performance Excellence",
      content: "Outstanding results in certification audits:",
      type: "audit-results",
      results: [
        { area: "Leadership & Planning", score: 98, comment: "Exceptional management commitment" },
        { area: "Risk Management", score: 96, comment: "Robust risk assessment process" },
        { area: "Operational Controls", score: 92, comment: "Effective control implementation" },
        { area: "Performance Evaluation", score: 94, comment: "Strong monitoring culture" }
      ]
    },
    {
      title: "Business Value Delivered",
      content: "Tangible benefits from security investment:",
      type: "business-value",
      benefits: [
        { benefit: "Risk Reduction", value: "1.5M DZD", detail: "Annual risk exposure eliminated" },
        { benefit: "Efficiency Gains", value: "600 hrs/year", detail: "Automated security processes" },
        { benefit: "Compliance", value: "100%", detail: "Legal requirements met" },
        { benefit: "Competitive Edge", value: "Market leader", detail: "First certified hospital in region" }
      ]
    },
    {
      title: "Future Security Roadmap",
      content: "Continuing our security excellence journey:",
      type: "future-roadmap",
      initiatives: [
        { initiative: "AI Security Monitoring", timeline: "2026", impact: "Predictive threat detection" },
        { initiative: "Zero Trust Architecture", timeline: "2027", impact: "Enhanced access security" },
        { initiative: "Cloud Security", timeline: "2026", impact: "Secure digital transformation" },
        { initiative: "Security Culture", timeline: "Ongoing", impact: "Organization-wide awareness" }
      ]
    },
    {
      title: "Security Excellence Achieved",
      content: "El Hayat Private Hospital - ISO 27001 Certified",
      type: "achievement",
      message: "Demonstrating world-class information security management and patient data protection."
    }
  ]

  const getCurrentSteps = () => {
    switch (currentPhase) {
      case 9: return phase9Steps
      case 10: return phase10Steps
      case 11: return phase11Steps
      case 12: return phase12Steps
      default: return phase9Steps
    }
  }

  const currentSteps = getCurrentSteps()
  const currentStepData = currentSteps[currentStep]

  const nextStep = () => {
    if (currentStep < currentSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else if (currentPhase < 12) {
      setCurrentPhase(currentPhase + 1)
      setCurrentStep(0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else if (currentPhase > 9) {
      setCurrentPhase(currentPhase - 1)
      setCurrentStep(getCurrentSteps().length - 1)
    }
  }

  const renderStepContent = () => {
    switch (currentStepData.type) {
      case 'treatment-framework':
        return (
          <div className="framework-grid">
            {currentStepData.options.map((option, index) => (
              <div key={index} className="option-card" style={{ borderLeftColor: option.color }}>
                <div className="option-header">
                  <span className="option-icon">{option.icon}</span>
                  <span className="option-name">{option.option}</span>
                </div>
                <div className="option-description">{option.description}</div>
                <div className="option-examples">
                  {option.examples.map((example, idx) => (
                    <span key={idx} className="example-tag">{example}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )

      case 'risk-decisions':
        return (
          <div className="decisions-grid">
            {currentStepData.decisions.map((decision, index) => (
              <div key={index} className="decision-card">
                <div className="decision-header">
                  <h3>{decision.risk}</h3>
                  <span className={`treatment-badge treatment-${decision.treatment.toLowerCase()}`}>
                    {decision.treatment}
                  </span>
                </div>
                <div className="decision-rationale">{decision.rationale}</div>
                <div className="decision-actions">
                  {decision.actions.map((action, idx) => (
                    <span key={idx} className="action-pill">{action}</span>
                  ))}
                </div>
                <div className="decision-investment">
                  <span>Investment: {decision.investment}</span>
                  <span>Risk: {decision.reduction}</span>
                </div>
              </div>
            ))}
          </div>
        )

      case 'controls-breakdown':
        return (
          <div className="controls-breakdown">
            <div className="controls-stats">
              <div className="stat">
                <div className="stat-value">{currentStepData.stats.preventive}</div>
                <div className="stat-label">Preventive Controls</div>
              </div>
              <div className="stat">
                <div className="stat-value">{currentStepData.stats.detective}</div>
                <div className="stat-label">Detective Controls</div>
              </div>
              <div className="stat">
                <div className="stat-value">{currentStepData.stats.corrective}</div>
                <div className="stat-label">Corrective Controls</div>
              </div>
              <div className="stat budget">
                <div className="stat-value">{currentStepData.stats.budget}</div>
                <div className="stat-label">Total Investment</div>
              </div>
            </div>
          </div>
        )

      case 'roadmap':
        return (
          <div className="roadmap-container">
            {currentStepData.phases.map((phase, index) => (
              <div key={index} className="roadmap-phase">
                <div className="phase-header">
                  <h3>{phase.phase}</h3>
                  <span className="phase-timeline">{phase.timeline}</span>
                </div>
                <div className="phase-focus">{phase.focus}</div>
                <div className="phase-risks">{phase.risks}</div>
                <div className="phase-progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${(index + 1) * 33}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'live-metrics':
        return (
          <div className="metrics-dashboard">
            {currentStepData.metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-header">
                  <span className="metric-name">{metric.name}</span>
                  <span className={`metric-trend trend-${metric.trend}`}>
                    {metric.trend === 'up' ? '↗' : '↘'}
                  </span>
                </div>
                <div className="metric-value">
                  {metric.current}{metric.unit}
                </div>
                <div className="metric-target">
                  Target: {metric.target}{metric.unit}
                </div>
                <div className="metric-progress">
                  <div 
                    className="progress-fill"
                    style={{ width: `${(metric.current / metric.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'control-testing':
        return (
          <div className="testing-grid">
            {currentStepData.tests.map((test, index) => (
              <div key={index} className="test-card">
                <div className="test-control">{test.control}</div>
                <div className="test-frequency">{test.frequency}</div>
                <div className="test-success">
                  <div className="success-rate">{test.success}%</div>
                  <div className="success-bar">
                    <div 
                      className="success-fill"
                      style={{ width: `${test.success}%` }}
                    ></div>
                  </div>
                </div>
                <div className={`test-status status-${test.status.toLowerCase().replace(' ', '-')}`}>
                  {test.status}
                </div>
              </div>
            ))}
          </div>
        )

      case 'performance-trends':
        return (
          <div className="trends-container">
            {currentStepData.trends.map((trend, index) => (
              <div key={index} className="trend-card">
                <div className="trend-metric">{trend.metric}</div>
                <div className="trend-comparison">
                  <span className="trend-old">{trend.q3}</span>
                  <span className="trend-arrow">→</span>
                  <span className="trend-new">{trend.q4}</span>
                </div>
                <div className={`trend-change ${trend.change > 0 ? 'positive' : 'negative'}`}>
                  {trend.change > 0 ? '+' : ''}{trend.change}%
                </div>
              </div>
            ))}
          </div>
        )

      case 'rca-framework':
        return (
          <div className="rca-grid">
            {currentStepData.methods.map((method, index) => (
              <div key={index} className="rca-card">
                <h3>{method.method}</h3>
                <div className="rca-use-case">{method.use}</div>
                <div className="rca-example">Example: {method.example}</div>
              </div>
            ))}
          </div>
        )

      case 'improvement-initiatives':
        return (
          <div className="initiatives-grid">
            {currentStepData.initiatives.map((initiative, index) => (
              <div key={index} className="initiative-card">
                <div className="initiative-area">{initiative.area}</div>
                <div className="initiative-improvement">{initiative.improvement}</div>
                <div className="initiative-impact">{initiative.impact}</div>
              </div>
            ))}
          </div>
        )

      case 'maturity-growth':
        return (
          <div className="maturity-timeline">
            {currentStepData.stages.map((stage, index) => (
              <div key={index} className="maturity-stage">
                <div className="stage-info">
                  <div className="stage-name">{stage.stage}</div>
                  <div className="stage-capabilities">{stage.capabilities}</div>
                </div>
                <div className="stage-maturity">
                  <div className="maturity-score">{stage.maturity}%</div>
                  <div className="maturity-bar">
                    <div 
                      className="maturity-fill"
                      style={{ width: `${stage.maturity}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'audit-results':
        return (
          <div className="audit-results">
            {currentStepData.results.map((result, index) => (
              <div key={index} className="audit-area">
                <div className="area-name">{result.area}</div>
                <div className="area-score">{result.score}%</div>
                <div className="area-comment">"{result.comment}"</div>
                <div className="area-progress">
                  <div 
                    className="progress-fill"
                    style={{ width: `${result.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'business-value':
        return (
          <div className="value-grid">
            {currentStepData.benefits.map((benefit, index) => (
              <div key={index} className="value-card">
                <div className="value-benefit">{benefit.benefit}</div>
                <div className="value-amount">{benefit.value}</div>
                <div className="value-detail">{benefit.detail}</div>
              </div>
            ))}
          </div>
        )

      case 'future-roadmap':
        return (
          <div className="future-roadmap">
            {currentStepData.initiatives.map((initiative, index) => (
              <div key={index} className="future-initiative">
                <div className="initiative-name">{initiative.initiative}</div>
                <div className="initiative-timeline">{initiative.timeline}</div>
                <div className="initiative-impact">{initiative.impact}</div>
                <div className="initiative-progress">
                  <div className="progress-dot"></div>
                  {index < currentStepData.initiatives.length - 1 && (
                    <div className="progress-line"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )

      case 'achievement':
        return (
          <div className="achievement-container">
            <div className="certification-badge">
              <div className="badge-icon">🏥</div>
              <div className="badge-title">ISO 27001:2022</div>
              <div className="badge-subtitle">CERTIFIED</div>
              <div className="badge-organization">El Hayat Private Hospital</div>
              <div className="badge-dates">2026-2029</div>
            </div>
            <div className="achievement-message">
              {currentStepData.message}
            </div>
          </div>
        )

      default:
        return (
          <div className="default-content">
            {currentStepData.visual && (
              <div className="step-visual">{currentStepData.visual}</div>
            )}
          </div>
        )
    }
  }

  return (
    <div className="presentation-container">
      <header className="presentation-header">
        <div className="hospital-brand">
          <h1>🏥 El Hayat Private Hospital</h1>
          <p>Information Security Excellence Journey</p>
        </div>
        <div className="phase-navigation">
          {[9, 10, 11, 12].map(phase => (
            <button
              key={phase}
              className={`phase-btn ${currentPhase === phase ? 'active' : ''}`}
              onClick={() => {
                setCurrentPhase(phase)
                setCurrentStep(0)
              }}
            >
              Phase {phase}
            </button>
          ))}
        </div>
      </header>

      <main className="slide-content">
        <div className="slide-header">
          <div className="step-indicator">
            Phase {currentPhase} • {currentStep + 1}/{currentSteps.length}
          </div>
          <h1>{currentStepData.title}</h1>
          {currentStepData.subtitle && (
            <h2>{currentStepData.subtitle}</h2>
          )}
          <p>{currentStepData.content}</p>
        </div>

        <div className="step-content">
          {renderStepContent()}
        </div>
      </main>

      <footer className="presentation-footer">
        <button 
          onClick={prevStep} 
          disabled={currentPhase === 9 && currentStep === 0}
          className="nav-btn prev"
        >
          ← Back
        </button>
        


        <button onClick={nextStep} className="nav-btn next">
          {currentPhase === 12 && currentStep === phase12Steps.length - 1 
            ? 'Complete 🎉' 
            : 'Next →'
          }
        </button>
      </footer>
    </div>
  )
}

export default ISMSCertificationPresentation