USE [master]
GO

/****** Object:  Database [iops_dev]    Script Date: 9/30/2014 1:54:12 PM ******/
CREATE DATABASE [iops_dev]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'iops_dev', FILENAME = N'C:\SQLData\Data\iops_dev.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'iops_dev_log', FILENAME = N'C:\SQLData\Logs\iops_dev_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO

ALTER DATABASE [iops_dev] SET COMPATIBILITY_LEVEL = 120
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [iops_dev].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [iops_dev] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [iops_dev] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [iops_dev] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [iops_dev] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [iops_dev] SET ARITHABORT OFF 
GO

ALTER DATABASE [iops_dev] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [iops_dev] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [iops_dev] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [iops_dev] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [iops_dev] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [iops_dev] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [iops_dev] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [iops_dev] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [iops_dev] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [iops_dev] SET  DISABLE_BROKER 
GO

ALTER DATABASE [iops_dev] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [iops_dev] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [iops_dev] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [iops_dev] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [iops_dev] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [iops_dev] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [iops_dev] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [iops_dev] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [iops_dev] SET  MULTI_USER 
GO

ALTER DATABASE [iops_dev] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [iops_dev] SET DB_CHAINING OFF 
GO

ALTER DATABASE [iops_dev] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [iops_dev] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO

ALTER DATABASE [iops_dev] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [iops_dev] SET  READ_WRITE 
GO


