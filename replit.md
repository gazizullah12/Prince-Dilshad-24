# Overview

Priyansh Bot v2 is a sophisticated Facebook Messenger automation bot built with Node.js. The bot provides extensive functionality including text-based commands, multimedia processing, user interaction features, and group management capabilities. It's designed to handle multiple chat groups simultaneously with persistent data storage and custom configurations.

**Current Status**: Successfully imported and configured for Replit environment.
- Web dashboard running on port 5000
- All dependencies installed
- Database connection working
- Ready for Facebook authentication setup

# Recent Changes

**September 12, 2025 - Initial Replit Setup**
- Updated Express server to bind to 0.0.0.0:5000 for Replit compatibility  
- Installed all npm dependencies (1084 packages)
- Configured Replit workflow to run "npm start"
- Created improved HTML dashboard with status indicators
- Set up VM deployment configuration for persistent operation
- Project successfully running, awaiting Facebook authentication

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Core Framework
The system is built around a main process manager (`index.js`) that provides web dashboard functionality and automatic restart capabilities. The core bot logic resides in `Priyansh.js` which initializes the Facebook Chat API connection and manages the command/event system.

## Command & Event System
- **Modular Command Structure**: Commands are stored in `/Priyansh/commands/` directory with a standardized module format
- **Event-Driven Architecture**: Global event handlers manage user interactions, message processing, and automated responses
- **Cooldown Management**: Built-in cooldown system prevents command spam and rate limiting
- **Permission System**: Multi-level permission system (0=user, 1=admin, 2=bot admin) controls command access

## Data Management
- **File-based Storage**: Uses JSON files and SQLite for data persistence
- **User & Thread Management**: Separate data structures for user profiles and thread information
- **Caching System**: Local file caching for images and temporary data
- **Configuration Management**: Centralized config system in `config.json` for bot settings

## Facebook Integration
- **Smart Facebook Chat API**: Uses `fca-smart-shankar` package for Facebook Messenger connectivity
- **Multi-Authentication Support**: Supports both email/password and appstate authentication methods
- **Auto-Login Features**: Automatic session management and renewal capabilities
- **Message Processing**: Handles text, images, reactions, and multimedia content

## Command Categories
- **Admin Commands**: Bot management, user moderation, system controls
- **Media Processing**: Image editing, meme generation, multimedia manipulation
- **Game Commands**: Interactive games, economy system, gambling features
- **Utility Tools**: Information retrieval, API integrations, automation features
- **Social Features**: Auto-responses, mention handlers, group interactions

## Image Processing
- **Canvas Integration**: Uses HTML5 Canvas for dynamic image generation
- **Template System**: Pre-built templates for memes and graphics
- **Font Management**: Custom font loading and text rendering
- **Multi-format Support**: Handles PNG, JPG, GIF formats with automatic optimization

## Security Features
- **Anti-spam Protection**: Built-in cooldown and rate limiting systems
- **User Banning System**: Automated and manual user/thread banning capabilities
- **Admin Protection**: Special protections for bot administrators and moderators
- **Content Filtering**: Automatic detection and handling of inappropriate content

# External Dependencies

## Core Dependencies
- **Facebook Chat API**: `fca-smart-shankar` for Facebook Messenger integration
- **Express.js**: Web server for dashboard and uptime monitoring
- **Canvas**: HTML5 Canvas API for image processing and generation
- **Axios**: HTTP client for external API communications
- **Moment.js**: Date/time handling with timezone support

## Image & Media Processing
- **Jimp**: JavaScript image processing library
- **FFMPEG**: Video/audio processing capabilities
- **Cheerio**: HTML parsing for web scraping functionality
- **Image-downloader**: Automated image downloading and caching

## Data Storage
- **fs-extra**: Enhanced filesystem operations
- **SQLite**: Lightweight database for persistent storage
- **JSON**: Configuration and cache file management

## Utility Libraries
- **Crypto**: Encryption and security functions
- **Lodash**: Utility functions for data manipulation
- **Colors/Chalk**: Terminal output formatting and logging
- **Figlet**: ASCII art generation for console displays

## External APIs
- Various anime/media APIs for content generation
- YouTube APIs for music and video processing
- Image manipulation services
- Weather and information APIs
- AI chatbot services for automated responses