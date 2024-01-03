# Compliance with Cybersecurity Standards

## CONTENTS
1. OBJECTIVE
2. SCOPE
3. RESPONSIBILITIES
4. REFERENCES
5. GLOSSARY
6. THREAT ANALYSIS
7. SECURITY ZONES
8. CYBERSECURITY AUDIT
9. FINAL CONSIDERATIONS

## 1. OBJECTIVE
Establish criteria, operational requirements, and documentation for the development of cybersecurity analysis, definition of zones and conduits, and equipment used to comply with the minimum requirements set by standards for data protection, personnel, and digital assets for IACS with IEC-62443 in different management systems.

## 2. SCOPE
This procedure applies to the Operations Management process in compliance with legal standards and the needs of the organization. It applies to all activities involving workplaces where digitalization, IIoT, network management, industrial communication systems, telemetry, cloud computing, automation, control, real-time monitoring, and reporting are executed.

## 3. RESPONSIBILITIES
3.1. The Director of Operations is responsible for implementing, executing, and ensuring that the procedure is carried out as indicated.
3.2. Workers are responsible for following the instructions in this procedure to facilitate and manage the processes established by the organization.

## 4. REFERENCES
Technical guide on compliance and execution of risk analysis, definition of zones, and defense in depth, IEC-62443.

## 5. GLOSSARY
5.1. PRODUCT PROVIDER
Responsible for the development and testing of the control system, including applications (antivirus, whitelist), embedded devices (PLCs, DCS, etc.), network devices (firewalls, routers, switches, etc.), and host devices (operator stations, engineering stations), working together as systems or subsystems, as defined in IEC-62443 3-3, 4-1, 4-2.

5.2. SYSTEM INTEGRATOR
Performs the integration and commissioning of products into an automation solution using a process in accordance with the IEC-62443 2-4, 3-2, 3-3 standard.

5.3. ASSET OWNER
Performs operational and maintenance tasks with the help of policies and procedures described in IEC-62443 2-1, 2-3, 2-4.

5.4. SECURITY ZONE
Security zones are groups of physical or logical assets that share security requirements and isolate critical components such as real-time control systems. Demilitarized zones (DMZ) are a special type of security zone that separates the external network (IT) from the internal network (IACS) with the help of components such as firewalls.

5.5. DEFENSE IN DEPTH
It is a layered security mechanism that has the benefit that, in case of an attack, if one of the layers is compromised, the other layers can continue to resist, helping to protect, detect, and respond to various attacks. An attack is understood as an attempt to violate the policies and strategies defined to block unauthorized access to digital systems. The layers are defined as follows:
1. Data: The innermost layer, used for ACL (Access Control List) and data encryption.
2. Application: Used to install software such as antivirus and application hardening.
3. Host: Used for patch implementation on detected vulnerabilities and user authorization.
4. Internal Network: Used for IPSec, packet authentication and encryption, IDS (Intrusion Detection System) for authorized or unauthorized users.
5. Perimeter: Used to implement Firewalls and VPN (Virtual Private Network).
6. Physical: Used for physical interconnection between networks and equipment, including switches, locks, and physical access to network hardware.
7. Policies and Procedures: Used to define and implement security policies and procedures in IACS networks.
Within these layers, solutions are incorporated and used together to achieve defense-in-depth, such as antivirus software, proxy servers, authentication and password security, biometrics, demilitarized zones (DMZ), data-centric security, encryption, firewalls (hardware or software), password hashing, intrusion detection systems (IDS), logging and auditing, multi-factor authentication, vulnerability scanners, physical security (e.g., deadbolt locks), timed access control, Internet Security Awareness Training, Virtual Private Network (VPN), sandboxing, Intrusion Protection System (IPS).

5.6. STRIDE
It is a risk model that identifies six categories of digital threats, where each threat represents a violation of the desirable properties of a system, namely, authenticity, integrity, non-repudiation, confidentiality, availability, and authorization:
- Spoofing - Impersonation
- Tampering - Sabotage
- Repudiation - Repudiation
- Information disclosure – Information leakage or security breaches
- Denial of Service – Service disruption
- Elevation of privilege – Privilege escalation

## 6. THREAT ANALYSIS
Established to meet the requirements outlined in IEC-62443 3-4. It is used as a measure to determine the critical path for prioritizing and deploying countermeasures to secure network architecture, based on threat information that can be found with tools and analysis of topologies and interconnections. The following structure is followed:
- Define the system architecture and its cybersecurity context. The architecture is specified as a data flow diagram containing components and their interactions with the system environment, assets, interaction paths, and communication technologies used. Trust perimeters are defined to determine security/trust zones. The cybersecurity context specifies appropriations regarding digital security measures. Tools like Microsoft Threat Modeling Tool or Amazon Inspector facilitate the understanding and analysis that can be done on network topologies.
- Threats are identified using the STRIDE method and are analyzed. For each threat, the risk of exploitation if countermeasures are not taken is determined. The result of this is a list of threats associated with unmitigated risk.
- Countermeasures mitigating the identified threats in the previous step are defined.
- Determine the risk of each threat that remains after applying the countermeasures (residual risk), using the same approach as in the previous step. The result of this is a list of threats associated with their residual risk.
- Final countermeasures are designed and implemented.
Using this methodology, an analysis of the overall structure of the system to be intervened or designed is conducted. The analysis strategies can be summarized in a diagram like this:

## 7. SECURITY ZONES
Each zone has a set of characteristics and security requirements:
- Security policies and security levels
- Asset inventory
- Access and control requirements
- Threats and vulnerabilities
- Consequences of a security breach
- Authorized technologies
- Management change process
The "System under Consideration" (SuC) is clearly defined, composed of all the infrastructure subject to analysis and may include control networks, tele-supervision, communication and security infrastructure (routers/firewalls), computers within the network, among others. It is also important to define the boundaries and access points to the System under Consideration. Once the SuC has been described in detail, including all subsystems that make it up, based on existing documentation and the status quo for existing industries and the design of additional modules, identified in certified documentation of architectures and technology references, the assessment phase is carried out, in which assets are assigned to zones and conduits. In brief, each asset present under the SuC must be grouped within a security zone, and relevant documentation is generated for each zone in a report that includes the following:
- Name and unique identifier
- Logical boundaries
- Physical boundaries
- List of all access points to the system associated with boundaries and devices
- List of data flows at access points
- Connected zones and conduits
- List of associated assets and consequences determined by threat/risk analysis
- Target security level
- Applicable security policies
- Assumptions of external dependencies
Under these considerations, the criteria for separating zones and conduits are as follows:
1. Assets from business information systems (IT) and industrial control systems (OT) should be grouped into different zones.
2. Assets identified as Safety Systems should be grouped into separate zones.
3. Assets or devices that connect temporarily with the SuC should be grouped into separate zones.
4. Wireless communications should be placed in one or more separate zones, separate from wired communications.
In addition to this, the segmentation of zones and the grouping of assets are reflected in a diagram that allows understanding the architecture and communication flows between zones based on IEC 62443-1-1.

## 8. CYBERSECURITY AUDIT
To develop digitalization and IACS activities, communication infrastructure must be verified and optimized. The audit is the initial process that involves a thorough analysis of cybersecurity requirements, including the planning of a path to implement secure networks, redundancies, filters, and segmentation. Therefore, documentation analysis and on-site examination are required to cover all layers of defense in depth required to implement a competent system with IEC 62443. Qualitative results are represented in zone segmentations and security level definitions as follows:
- The definition of security levels serves as a point of comparison and management for different zones within an organization. According to the standard, there are three types of security levels: the target security level (SL-T), which describes the desired security level for a zone; the achieved security level (SL-A), which describes the measured security level once the system design or implementation has been established; and the capacity security level (SL-C), which describes the security level that can be achieved with properly configured system components.
Based on IEC-62443 3-3, 4-2:
- Security Level 1: Prevent unauthorized disclosure of information caused by espionage or casual exposure.
- Security Level 2: Prevent unauthorized disclosure of information to entities actively seeking it using simple means with few resources, generic skills, and low motivation.
- Security Level 3: Prevent unauthorized disclosure of information to entities actively seeking it using sophisticated means with moderate resources, specific IACS skills, and moderate motivation.
- Security Level 4: Prevent unauthorized disclosure of information to entities actively seeking it using sophisticated means with extensive resources, specific IACS skills, and high motivation.
Based on these levels, a metric is structured to condition the development and limit the solution to the level of complexity presented. It is important to determine this metric, both internally as an executor, and also regarding the security configuration that a predetermined project may have by default. According to the evaluation and case analysis for the system, a report with improvements, changes, and alterations relevant to complying with the standard and being prepared for digital and internet operations is delivered. 

## 9. FINAL CONSIDERATIONS
Under the guidelines of the stipulated structure, achieving a sufficient level of maturity ensures that network requirements such as segregation, load balancing, IT/OT segmentation, definition of security zones, conduits, proxies, demilitarized zones (DMZ), and filtering and data flow redirection using managed switches, defined flow channels, and encrypted routing ensure a secure connection between networks and private channels. The delivered system complies with IEC 62443 and ensures confidentiality, access control, and privacy, as well as availability for industrial control systems. Ruggedcom and ROXII systems ensure communication with cybersecurity standards and employ applications in computing modules to achieve intrusion detection and protection solutions. Based on defense-in-depth, access control, and policies, security zones, conduits, and software are included in an inventory report. In addition, quality tests of connection to services and pentests can be included in addition to the service. Port and permission configuration is developed in accordance with the previous design and on-site testing, including a report of the results and the validity of the established configuration in the cybersecurity services-related offer. The continuous improvement of the service offered is promoted annually and semi-annually and includes reviews, patches, updates, and improvement proposals. Remote access via IPSEC and other network features, including network defenses and software, computer systems for proxy servers, VPNs, malware, and firewalls, access control, encryption, and data flow filtering are included in the defense with Ruggedcom and ROXII, as well as proprietary software such as Secure NOK. These are included in a formal offer based on in-depth review with the IT segment, physical review or complete documentation for all network systems, both physical and logical, such as software, files, and configurations. Audit reports are attached, relating regulatory bodies and tests performed, findings, action plans, and improvements, and a critical path to evaluate future procedures is provided.
